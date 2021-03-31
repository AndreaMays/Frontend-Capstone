import {ListGroup, Card} from "react-bootstrap"
import React, {useContext, useState} from "react"
import {ChildContext} from "./ChildProvider"
import {useHistory} from "react-router-dom"

export const ChildCard = ({form}) => {
const {childForms, getChildForms, deleteChildForm, addChildForm, getChildFormById} = useContext(ChildContext)

const [childForm, setChildForm] = useState({})

const history = useHistory()

const handleRelease = () => {
  deleteChildForm(childForm.id)
  .then(() => {
      history.push("/children")
  })
}

return(
<Card className="childCard" style={{ width: '18rem' }}>
    
  <ListGroup variant="flush">
    <ListGroup.Item>Name:{form.name}</ListGroup.Item>
    <ListGroup.Item>Age:{form.age}</ListGroup.Item>
    <ListGroup.Item>Gender:{form.gender}</ListGroup.Item>
    <ListGroup.Item>Coat Size:{form.coatSize}</ListGroup.Item>
    <ListGroup.Item>Pant Size:{form.pantSize}</ListGroup.Item>
    <ListGroup.Item>Shirt Size:{form.shirtSize}</ListGroup.Item>
  </ListGroup>
  <div>
      <button className="deleteGroceryButton" onclick={handleRelease}>Delete</button>
      <button className="editGroceryButton" onclick={() => { history.push(`/groceries/edit/${childForm.id}`)}}>Edit</button>
      </div>
</Card>
)
}