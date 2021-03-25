import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from"../Location/LocationProvider"
import { ProductContext } from "./GroceryProvider"
import { UserContext} from "../Users/UserProvider"
import { useHistory, useParams } from 'react-router-dom';
import { Button } from "react-bootstrap"
import "./Grocery.css"
import {Form} from "react-bootstrap"

export const GroceryForm = () => {
    const {addProduct, getProducts, groceryMenus, getProductById, updateProduct, getAllGroceryMenus} = useContext(ProductContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { users, getUsers} = useContext(UserContext)

    const [isLoading, setIsLoading] = useState(true)

    // useParam is a hook. its taking the application view line 35 "productId" on the back of the url path route
    const { productId } = useParams();

    const history = useHistory()
    
    const currentUserId = parseInt(sessionStorage.getItem("app_user_id"))

    const [grocery, setGrocery] = useState({
        userId: currentUserId,
        locationId: 0,
        message: "",
        isReceived: "",
        groceryMenuId: 0
    });

     useEffect(() => {
        getAllGroceryMenus().then(getLocations).then(() => {
            if(productId){
                getProductById(productId)
                .then(setGrocery)
                }

        })
    }, [])



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
        <form className="groceryForm">
             <h2 className="groceryForm__title">{productId ? "Edit Grocery Form" : "Add Grocery Form"}</h2>

            <fieldset>
            <div className="form-group">
                <label htmlFor="groceryMenuId">Grocery Week: </label>
                <select value={grocery.groceryMenuId} name="groceryMenu" id="groceryMenuId" onChange={handleControlledInputChange} required autoFocus className="form-control" >
                    <option value="0">Select a Week</option>
                    {groceryMenus.map(gm => (                                             
                        <option key={gm.id} value={gm.id}>
                            {gm.title}
                        </option>
                    ))}
                </select>
                </div>
            </fieldset>

            <fieldset>
            <div className="form-group">
                <label htmlFor="LocationId">Location: </label>
                <select value={grocery.locationId} name="location" id="locationId" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Select location">
                    <option value="0">Select a Location</option>
                    {locations.map(location => (
                        <option key={location.id} value={location.id}>
                            {location.name}
                        </option>
                    ))}
                </select>
            </div>
        </fieldset>

        <fieldset>
                <div className="form-group">
                    <label htmlFor="message">Allergy Text Message</label>
                    <textarea type="text" id="message" autoFocus className="form-control" onChange={handleControlledInputChange} placeholder="Please fill in any food allergies" value={grocery.message} />
                </div>
        </fieldset>
            <button className="SaveEditButton" disabled={isLoading}  onClick={event => {
                event.preventDefault()
                handleClickSaveEditForm()}}> 
                {productId ? "Save Grocery" : "Add Grocery" }
              </button>
</form>

)
}


