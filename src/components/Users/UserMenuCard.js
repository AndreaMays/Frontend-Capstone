import {useHistory } from "react-router-dom"
import { ProductContext } from "../Grocery/GroceryProvider"
import {useContext} from "react"
import React from "react"
import {UserContext} from "./UserProvider"
import { Card, CardDeck, ListGroup, ListGroupItem, Button } from "react-bootstrap"
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

<Card className="userCardOrder" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={userForm.groceryMenu.image} />
  <Card.Body>
    <Card.Title>Your Recent Order</Card.Title>
    <Card.Text>
    </Card.Text>
  </Card.Body>

  <ListGroup className="list-group-flush">
    <ListGroupItem>Week: {userForm.groceryMenu.title}</ListGroupItem>
    <ListGroupItem>Location: {userForm.location.name}</ListGroupItem>
    <ListGroupItem>Message: {userForm.message}</ListGroupItem>
  </ListGroup>

  <Card.Body>
    <Button variant="info" onClick={() => { history.push(`/orders/edit/${userForm.id}`)}}>Edit</Button>{' '}
    <Button variant="danger" onClick={handleRelease}>Delete</Button> 
  </Card.Body>
</Card>

 
    </>
    )
}
