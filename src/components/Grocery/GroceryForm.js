import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from"../Location/LocationProvider"
import { ProductContext } from "./GroceryProvider"
import { useHistory } from 'react-router-dom';
import { Button } from "react-bootstrap"
import "./Grocery.css"

export const GroceryForm = () => {
    const {addGrocery, getProducts, products} = useContext(ProductContext)
    const { locations, getLocations } = useContext(LocationContext)
    
       // const {users, getUsers} = useContext(UserContext)

    const currentUserId = parseInt(sessionStorage.getItem("arcc_user"))

    const [grocery, setGrocery] = useState({
        usersId:currentUserId,
        locationId: 0,
        textArea: "",
        timeStamp: ""
    });

    useEffect(() => {
        getProducts().then(getLocations)
    }, [])

//  const {groceryId} = useParams()
    const history = useHistory();

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

    const handleClickSaveGroceryForm = () => {
        const locationId = products.userId
        if(locationId === 0) {
            window.alert("Please select a pickup/dropOff location")
        } else {
            addGrocery(grocery)
            .then(() => history.push("/groceries"))
            }
        }
    

    return (
        <form className="groceryForm">
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
            <button className="addButton" onClick={handleClickSaveGroceryForm}>
              "Save Form"
            </button>
      
        </form>

)
                    
}
