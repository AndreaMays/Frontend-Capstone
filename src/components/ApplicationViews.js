import React from "react"
import { Route } from "react-router-dom"
import { GroceryList } from "./Grocery/GroceryList"
import { GroceryProvider } from "./Grocery/GroceryProvider"
import { Home } from "./Home"


export const ApplicationViews = () => {
    return (
    <>
   <Route exact path="/home">
       <Home />
    </Route> 

    {/* <Route exact path="/about">
    </Route> */} 

    
    <GroceryProvider>
    <Route exact path="/groceries">
        <GroceryList/>
    </Route>
    </GroceryProvider>
    </>
    )
}