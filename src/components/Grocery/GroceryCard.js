import { Card } from "react-bootstrap"
import { CardDeck } from "react-bootstrap"
import React from "react"

// line 6 is passing one "product" from the iteration of line 24-26. Line 6 "product" has to be the same variable name from where its coming from (i.e. groceryList linr 24-26)


export const GroceryCard = ({ menu}) =>  (
  <>
 
<CardDeck>
  <Card className="groceryCard" style={{ width: '18rem'}}>
    <Card.Img variant="bottom" src={menu.image} 
    width={200}
    height={200}
    alt="171x180"/>
    <Card.Body>
      <Card.Title>{menu.groceryMenu.title}</Card.Title>
      <Card.Text>
      Grocery Items: 
        <li>2 Cans of Tuna </li>
        <li>1 Bag Dry Black Beans </li>
        <li>1lb Dry White Rice </li>
        <li>1lb Dry Oatmeal </li>
        <li>Breakfast Bars </li>
        <li>2 Boxes of Mac and Cheese</li>
        <li>1lb of Carrots</li>
      </Card.Text>
    </Card.Body>
  </Card>

</CardDeck>
</>
  )



// variant="bottom"