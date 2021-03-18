import React, {useContext, useEffect } from "react"
import {ProductContext} from "./GroceryProvider"
import { GroceryCard } from "./GroceryCard"
import { useHistory } from "react-router"
import { Button } from "react-bootstrap"

// add "get" function call to useEffect and "useContext"

export const GroceryList = () => {
    const { products, getProducts, groceryMenus, getAllGroceryMenus, getGroceryMenuProdItem, getProductItem, groceryMenuProducts, productItems } = useContext(ProductContext)
    const history = useHistory()

    useEffect(() => {
        getProducts()
        getAllGroceryMenus()
        getGroceryMenuProdItem()
        getProductItem()
    }, [])

    console.log(groceryMenuProducts)
    return (
        <>
        <div className="groceries">
        <h2>Grocery List and Registration</h2>
        <p>
        <Button variant="primary" className="addButton" onClick={() => {history.pushState("/groceries/create")}}>Add Grocery</Button>
        
        <p>Welcome to the "A.R.C.C." app's resource page for groceries. We count it a privelege to be able to provide
        groceries for our community members. Please read through each weeks groceries below. When you are ready, click the 
        "Add Groceries" button. On the form, please select your location for "pick-up" or "drop-off". One reminder our drop-off
        locations are very specific, so if you are not in that specific community or living on the street listed under
        "locations" you will most likely need to pickup at the church. 
    
<br/>
        Also on the form, you may select the weeks that you need groceries or select "all weeks". If you are in need of extra groceries
        or have a specific item that needs to be left out of the pre-made bag, i.e. peanut butter due to peanut allergies, 
        please be sure to notate that in the "message" box on the form.
  </p>
        </p>
 
        {/* {
            products.map(product => {
                return <GroceryCard key={product.id} product={product}/>
            })
        } */}
        {
            groceryMenuProducts.map(groceryMenuProduct => {
                return <GroceryCard key={groceryMenuProduct.id} menu={groceryMenuProduct}/>
            })
        }
         {/* {
             productItems.map(productItem => {
                 return <GroceryCard key={productItem.id} item={productItem}/>
                })
            } */}

        </div>
        </>
    )
    // console.log(groceryMenuProduct)
    // console.log(productItem)
}
// line 24 -26 we are mapping through the products array. The yellow variable "menu and product" are what go to GroceyCard