import {useHistory } from "react-router-dom"
import { ProductContext } from "../Grocery/GroceryProvider"
import {useContext} from "react"
import React from "react"
import {UserContext} from "./UserProvider"
import { Card, CardColumns, ListGroup, ListGroupItem, Button, CardDeck } from "react-bootstrap"
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

    {/* <div class="card-deck userCard">
    <img src={userForm.groceryMenu.image} class="card-img-top" alt="..."></img>
    
    <div class="card-body">
      <h5 class="card-title">Your Recent Order</h5>
      <p class="card-text">
        <li>{userForm.groceryMenu.title}</li>
        <li>{userForm.location.name}</li>
        <li>{userForm.message}</li>
      </p>
    </div>
    <div class="card-footer">
    <Button variant="info" onClick={() => { history.push(`/orders/edit/${userForm.id}`)}}>Edit</Button>{' '}
    <Button variant="danger" onClick={handleRelease}>Delete</Button> 
    </div> */}
  
  {/* <div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div> */}
  {/* </div> */}





<Card className="userCardOrder" style={{ width: '20rem' }}>
  <Card.Img variant="top" src={userForm.groceryMenu.image} />
  <Card.Body className="userCardBody" >
    <Card.Title>Your Recent Order</Card.Title>
    <Card.Text>
    </Card.Text>
  

  <ListGroup className="list-group-flush">
    <ListGroupItem>Week: {userForm.groceryMenu.title}</ListGroupItem>
    <ListGroupItem>Location: {userForm.location.name}</ListGroupItem>
    <ListGroupItem>Message: {userForm.message}</ListGroupItem>
  </ListGroup>

 
    <Button variant="info" onClick={() => { history.push(`/orders/edit/${userForm.id}`)}}>Edit</Button>{' '}
    <Button variant="danger" onClick={handleRelease}>Delete</Button> 
  </Card.Body>
</Card>

 
    </>
    )
}
