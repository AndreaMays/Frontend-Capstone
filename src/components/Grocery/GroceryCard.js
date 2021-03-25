import { Card } from "react-bootstrap"
import { CardDeck } from "react-bootstrap"
import React from "react"


// "menu" on line 8 is passing in the items returned from the conditional 
// on the weeklyMenuCard that is pulling all groceryMenu and productItems

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