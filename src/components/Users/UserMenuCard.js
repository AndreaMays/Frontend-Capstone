import {useHistory } from "react-router-dom"
import { ProductContext } from "../Grocery/GroceryProvider"
import {useContext} from "react"
import React, {useEffect, useState, useParams } from "react"
import {UserContext} from "./UserProvider"
import { Card } from "react-bootstrap"
import { CardDeck } from "react-bootstrap"
import "./User.css"

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


  <CardDeck>
   <Card className="userCard" style={{ width: '20rem'}}>
      <Card.Body>
      <Card.Title></Card.Title>
      
      
      <Card.Text>
      <div className="card">
        <div class="card-body">Week: {userForm.groceryMenu.title}</div>
        <div class="card-body">Location: {userForm.location.name}</div>
        <div class="card-body">Message: {userForm.message}</div>

        <div>
          <button className="editGroceryButton" onClick={() => { history.push(`/orders/edit/${userForm.id}`)}}>Edit</button>
            <button className="deleteGroceryButton" onClick={handleRelease}>Delete</button>
        </div>

        </div>

      </Card.Text>
    </Card.Body>
  </Card>

</CardDeck>  
    </>
    )
}
