import {useHistory } from "react-router-dom"
import { ProductContext } from "../Grocery/GroceryProvider"
import {useContext} from "react"
import React, {useEffect, useState, useParams } from "react"
import {UserContext} from "./UserProvider"

export const UserMenuCard = ({ userForm }) => {
    const { deleteProduct, getProductById } = useContext(ProductContext)
    const {groceryForms, getGroceryForms } = useContext(UserContext)
  

    const history = useHistory();

    

       const handleRelease = () => {
        deleteProduct(userForm.id)
        .then(getGroceryForms)
        .then(() => {
            history.push("/orders")
        })
    }
    
    return(
        <>
        <div>Week: {userForm.groceryMenu.title}</div>
        <div>Location: {userForm.location.name}</div>
        <div>Message: {userForm.message}</div>

    <div>
      <button className="editGroceryButton" onClick={() => { history.push(`/orders/edit/${userForm.id}`)}}>Edit</button>
        <button className="deleteGroceryButton" onClick={handleRelease}>Delete</button>
      </div>
    </>
    )
}
