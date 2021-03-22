import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from"../Location/LocationProvider"
import { ProductContext } from "./GroceryProvider"
import { useHistory, useParams } from 'react-router-dom';
import { Button } from "react-bootstrap"
import "./Grocery.css"
import {Form} from "react-bootstrap"

export const GroceryForm = () => {
    const {addProduct, getProducts, products, groceryMenus, getProductById, updateProduct} = useContext(ProductContext)
    const { locations, getLocations } = useContext(LocationContext)
    
       // const {users, getUsers} = useContext(UserContext)
       console.log("whatsThis", products)

    const currentUserId = parseInt(sessionStorage.getItem("arcc_user"))

    const [grocery, setGrocery] = useState({
        usersId:currentUserId,
        locationId: 0,
        message: "",
        isReceived: "",
        groceryMenuId: 0
    });

    const [product, setProduct] = useState()

    useEffect(() => {
        getProducts().then(getLocations)
    }, [])

   const [isLoading, setIsLoading] = useState(true)
    const { productId } = useParams();
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newGrocery = {...grocery}
        newGrocery.timeStamp = Date.now()
        let selectedVal = event.target.value

        if (event.target.id.includes("id")) {
            selectedVal = parseInt(selectedVal)
        }
        
        newGrocery[event.target.id] = selectedVal
        setGrocery(newGrocery)
    }

    const handleClickSaveEditForm = () => {
        const locationId = products.userId
        if(locationId === 0) {
            window.alert("Please select a pickup/dropOff location")
        } else {
            setIsLoading();
            if (grocery.userID === currentUserId) {
                updateProduct({
                    userId: 0,
                    groceryMenuId: products.groceryMenuId,
                    locationId: products.locationId,
                    message: products.message,
                })
            .then(() => history.push(`/groceries`)) 
           } else {
            addProduct({
                userId: 0,
                groceryMenuId: products.groceryMenuId,
                locationId: products.locationId,
                message: products.message,
            })
            .then(() => history.push("/groceries"))
            }
        }
    }

    useEffect(() => {
        getProducts().then(() => {
            if (productId) {
                getProductById(productId)
                .then(product => {
                    setProduct(product)
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
                <select value={products.groceryMenuId} name="groceryMenu" id="groceryId" onChange={handleControlledInputChange} className="form-control" >
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
                <select value={products.locationId} name="location" id="locationId" onChange={handleControlledInputChange} className="form-control" >
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
                    <label htmlFor="textArea">Allergy Text Message</label>
                    <textarea type="text" id="textArea" autoFocus className="form-control" onChange={handleControlledInputChange} value={grocery.textArea} />
                </div>
        </fieldset>
            <button className="SaveEditButton" disabled={isLoading}  onClick={event => {
                event.preventDefault()
                handleClickSaveEditForm()}}> 
                {productId ? "Add Grocery" : "Save Grocery"}
              </button>
</form>

)
}


