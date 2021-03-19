import React, {useContext, useEffect } from "react"
import {ProductContext} from "./GroceryProvider"
import { GroceryCard } from "./GroceryCard"
import { useHistory } from "react-router"
import { Button } from "react-bootstrap"
import { WeeklyMenuCard } from "./weeklyMenuCard"

// add "get" function call to useEffect and "useContext"

export const GroceryList = () => {
    const { products, getProducts, groceryMenus, getAllGroceryMenus, getGroceryMenuProdItem, 
        getGroceries, groceryMenuProducts, groceries } = useContext(ProductContext)
    const history = useHistory()

    // console.log(groceryMenuProducts)

      useEffect(() => {
        getProducts()
        getAllGroceryMenus()
        getGroceryMenuProdItem()
        getGroceries()
    }, [])

    // console.log(groceryMenuProducts)
    return (
        <>
        <div className="groceries">
        <h2>Grocery List and Registration</h2>
        
        <Button variant="primary" className="addButton" onClick={() => {history.pushState("/groceries/create")}}>Add Grocery</Button>
        
        <p>Welcome to the "A.R.C.C." app's resource page for groceries. We count it a privelege to be able to provide
        groceries for our community members. Please read through each weeks groceries below. When you are ready, click the 
        "Add Groceries" button. On the form, please select your location for "pick-up" or "drop-off". One reminder our drop-off
        locations are very specific, so if you are not in that specific community or living on the street listed under
        "locations" you will most likely need to pickup at the church. 
 </p>   
<br/>
<p>
        Also on the form, you may select the weeks that you need groceries or select "all weeks". If you are in need of extra groceries
        or have a specific item that needs to be left out of the pre-made bag, i.e. peanut butter due to peanut allergies, 
        please be sure to notate that in the "message" box on the form.
  </p>
    
        
        {
            groceryMenus.map(weeklyMenu => {
                //  console.log(pItem)
                return <WeeklyMenuCard key={weeklyMenu.id} week={weeklyMenu}/>
            })
        }      
        </div>
        </>
    )
    // console.log(groceryMenuProduct)
    // console.log(productItem)
}
// line 47 -51 we are mapping through the groceryMenus from the json. The parameter of the .map function is "weeklyMenu"
// we are returning the "weeklyMenuCard" with the variables "key" and "week" being given "weeklyMenu.id" and" weeklyMenu"
// this will take me to the "weeklyMenuCard.js" component