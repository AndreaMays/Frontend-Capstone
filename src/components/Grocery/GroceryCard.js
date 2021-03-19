import { Card } from "react-bootstrap"
import { CardDeck } from "react-bootstrap"
import React from "react"



// line 6 is passing one "product" from the iteration of line 24-26. Line 6 "product" has to be the same variable name from where its coming from (i.e. groceryList linr 24-26)

export const GroceryCard = ({ menu }) => (
  
  <>
  
<CardDeck>
   <Card className="groceryCard" style={{ width: '18rem'}}>
    {/* <Card.Img variant="bottom" src={menu.image} 
    width={200}
    height={200}
    alt="171x180"/>  */}
    <Card.Body>
      <Card.Title></Card.Title>
      
      <Card.Text>
      Grocery Items:
       {menu.productItem.name}
      </Card.Text>
    </Card.Body>
  </Card>

</CardDeck>
</>
  )




// variant="bottom"