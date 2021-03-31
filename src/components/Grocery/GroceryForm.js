import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from"../Location/LocationProvider"
import { ProductContext } from "./GroceryProvider"
import { UserContext} from "../Users/UserProvider"
import { useHistory, useParams } from 'react-router-dom';
import { Button } from "react-bootstrap"
import "./Grocery.css"
import {Form} from "react-bootstrap"

export const GroceryForm = () => {
    // "useContext" below is pulling the data from the "ProductContext" I set in the "Grocery Provider".
    // the "useContext" is a hook in React that is gathering all the data from the Gocery Provider and passing that infor
    // to the other components I choose to use the "useContext" in. 
    const {addProduct, getProducts, groceryMenus, getProductById, updateProduct, getAllGroceryMenus} = useContext(ProductContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { users, getUsers} = useContext(UserContext)

    const [isLoading, setIsLoading] = useState(true)

    // useParam is a hook. its taking the application view line 35 "productId" on the back of the url path route
    const { productId } = useParams();

    const history = useHistory()
    
    const currentUserId = parseInt(sessionStorage.getItem("app_user_id"))


// "useState" is a React hook. This is used to set the state of the component.  It is used to store the information 
// about the grocery in the variable "grocery" and then it sets a function called "setGrocery". 
// Everytime this component is updated on the DOM, this state is re-rendered to the DOM. It returns a variable "grocery" 
// with the current state value, and the orange function is there to update the value.  
// 
    const [grocery, setGrocery] = useState({
        userId: currentUserId,
        locationId: 0,
        message: "",
        isReceived: "",
        groceryMenuId: 0
    });


// "useEffect" is a react funtion. The "dependency array", only allows this function to run one time. (Rememeber your
// infinite loop situation when I didn't put the array brackets at the bottom.). This is done to help pull the information
// from the fetch calls, because the information is not pulled during the initial render. The initial render pulls the 
// empty array, then the order of the render moves to the return, after the return the information is pulled in the useEffect
// from there i call "setGrocery" function which triggers the "useState".
     useEffect(() => {
        getAllGroceryMenus().then(getLocations).then(() => {
            if(productId){
                getProductById(productId)
                .then(setGrocery)
                }

        })
    }, [])


// the function below is watching for the input change on the form/
    const handleControlledInputChange = (event) => {
        // console.log(event.target.id)
        const newGrocery = {...grocery}
        let selectedVal = event.target.value

        
        
        
        
        newGrocery[event.target.id] = selectedVal
        setGrocery(newGrocery)
    }

    // line 64 is saying to use the "productId" from "useParams" and the "userId" is equal to the current user Id update the product
    // otherwise go to adding the product if those Id's are not there add product. ProductId is the key because there can 
    // only be a productId on something that's already there and needs to be updated. 
    const handleClickSaveEditForm = () => {
        if(grocery.locationId === 0) {
            window.alert("Please select a pickup/dropOff location")
        } else {
            setIsLoading(true);
            // console.log(grocery.id)
            if (productId && grocery.userId === currentUserId) {
                updateProduct({
                    userId: currentUserId,
                    groceryMenuId: parseInt(grocery.groceryMenuId),
                    locationId: parseInt(grocery.locationId),
                    message: grocery.message,
                    isReceived: false,
                    id: productId
                })
            .then(() => history.push(`/orders`)) 
           } else {
            addProduct({
                    userId: currentUserId,
                    groceryMenuId: parseInt(grocery.groceryMenuId),
                    locationId: parseInt(grocery.locationId),
                    message: grocery.message,
                    isReceived: false,
            })
            .then(() => history.push("/orders"))
            }
        }
    }

    // below useEffect is working after the intial render on the dom. The empty dependency array tells it to run only once. 
    //  It fires after the return, filling the empty array with information, and then moves on to the "state". 
    useEffect(() => {
        getProducts().then(() => {
            if (productId) {
                getProductById(productId)
                .then(product => {
                    setGrocery(product)
                    setIsLoading(false)
                })
            } else {
                setIsLoading(false)
            }
        })

    }, [])

     return (

<Form>

<h2 className="groceryForm__title">{productId ? "Edit Grocery Form" : "Add Grocery Form"}</h2>

  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Select A Grocery Week</Form.Label>
    <Form.Control as="select" value={grocery.groceryMenuId} name="groceryMenu" id="groceryMenuId" onChange={handleControlledInputChange} required autoFocus className="form-control">
                 <option value="0">Select a Week</option>
                     {groceryMenus.map(gm => (                                             
                        <option key={gm.id} value={gm.id}>
                            {gm.title}
                            </option>
                    ))}  
    </Form.Control>

<br></br>
    <Form.Label>Select a location to pickup groceries or have groceries dropped off</Form.Label>
    <Form.Control as="select" value={grocery.locationId} name="location" id="locationId" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Select location">
                 <option value="0">Select A Location</option>
                 {locations.map(location => (
                        <option key={location.id} value={location.id}>
                            {location.name}
                        </option>
                    ))}
    </Form.Control>
  </Form.Group>
  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} type="text" id="message" autoFocus className="form-control" onChange={handleControlledInputChange} placeholder="Please fill in any food allergies" value={grocery.message} />
    <button className="SaveEditButton" disabled={isLoading}  onClick={event => {
                event.preventDefault()
                handleClickSaveEditForm()}}> 
                {productId ? "Save Grocery Week" : "Add Grocery Week" }
              </button>
  </Form.Group>
</Form>

)
}


