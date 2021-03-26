import {ListGroup, Card} from "react-bootstrap"
import React, {useContext} from "react"
import {ChildContext} from "./ChildProvider"

export const ChildCard = ({form}) => {
const {childForms} = useContext(ChildContext)

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
</Card>
)
}