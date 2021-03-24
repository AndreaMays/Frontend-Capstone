import { Card, CardDeck } from "react-bootstrap"
import { ProductContext } from "./GroceryProvider"
import {GroceryCard} from "./GroceryCard"
import React, {useContext} from 'react'
import {useEffect} from "react"


export const WeeklyMenuCard = ({week}) => {
    const {groceryMenuProducts, getProducts, products} = useContext(ProductContext)

    // history = useHistory()

    // useEffect(() => {
    //     console.log("useEffect", product)
    //     getProducts()
    //    }, [])

    return (
        <CardDeck>
            <Card>
                <Card.Body>
                    <Card.Title> {week.title} </Card.Title>
                    { groceryMenuProducts.map(product => {
                        // console.log("HELP",groceryMenuProducts)
                        if(product.groceryMenuId === week.id) {
                            // console.log("hungry",product)
                            return <GroceryCard key={product.id} menu={product}></GroceryCard>
                        }
                    })
                }
                
                {/* <button className="editGroceryButton" onclick={() => { history.push(`/groceries/details/${product.id}`)}}>Edit</button>
                {products.find(productId => {(groceryMenuId === groceryMenu.id)
                console.log(productId)
                ) */}
            
                </Card.Body>

            </Card>
        </CardDeck>
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