import { Card, Accordion, Button } from "react-bootstrap"
import { ProductContext } from "./GroceryProvider"
import {GroceryCard} from "./GroceryCard"
import React, {useContext} from 'react'
import {useEffect} from "react"
import { useHistory } from "react-router"


export const WeeklyMenuCard = ({week}) => {
    const {groceryMenuProducts} = useContext(ProductContext)

    const history = useHistory()

    //"groceryMenuProducts" (above) is being called from the expand fetch call on getGroceryMenuProductItems which
    // is getting the join table, the groceryMenu and the Product Item.
// "product" on line 19 is passing in the conditional that is pulling all groceryMenu and productItems

    return (
<Accordion className="row weeklyCard ">
    <div>
    <Card  className="card-group weeklyMenuCard">
  <Card.Header>
  <button className="addButton" onClick={() => {history.push("/groceries/create")}}>
              "Sign up for grocery Week"
        </button>
    <Accordion.Toggle as={Button} variant="link" eventKey="0">
    {week.title}
    </Accordion.Toggle>
  </Card.Header>
  <Accordion.Collapse eventKey="0">
    <Card.Body>
    { groceryMenuProducts.map(product => {
                        // console.log("HELP",product)
                        if(product.groceryMenuId === week.id) {
                            // console.log("hungry",product)
                            return <GroceryCard key={product.id} menu={product}></GroceryCard>
                        }
                    })
                }
    </Card.Body>
  </Accordion.Collapse>
</Card>
</div>
</Accordion>
    )
}

// from GroceryList line 47 - 51 we mapped throught the groceryMenus, returning this "weeklyMenuCard". It was passed
// this "weeklyMenuCard" with the variable "key" and "week". I am using "({week})" in the parameter on line 8.
// then setting up the card  to receive the "week.title" for the title of the card. 
// line 16-20 is another .map() function where I am bringing in the "groceryMenuProducts"(which is the "productItemId") in the 
// join table in json.  From there the variable is set to "product" and the conditional on line 17 says "if the 
// groceryMenuId is equal to the 'week.id' (from the grocerylist map). From there the "product" variable now holds 
// the returned information from the conditional. So line 18 returns the "Grocery Card" with two variables key and menu. Those
// variable hold the values "product.id" and the whole "product".
// This moves us to the "GroceryCard.js"