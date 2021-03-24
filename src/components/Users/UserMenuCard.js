import {useHistory } from "react-router-dom"
import { ProductContext } from "../Grocery/GroceryProvider"
import {useContext} from "react"
import React, {useEffect, useState, useParams } from "react"


export const UserMenuCard = ({ userForm }) => {
    const { deleteProduct, getProductById } = useContext(ProductContext)
  

    const history = useHistory();

    

       const handleRelease = () => {
        deleteProduct(userForm.id)
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
      <button className="editGroceryButton" onclick={() => { history.push(`/orders/edit/${userForm.id}`)}}>Edit</button>
        <button className="deleteGroceryButton" onclick={() => deleteProduct(userForm.Id)}>Delete</button>
      </div>
    </>
    )
}
