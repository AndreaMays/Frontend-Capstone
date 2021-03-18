import React from "react"
import { Route } from "react-router-dom"
import { GroceryList } from "./Grocery/GroceryList"
import { ProductProvider } from "./Grocery/GroceryProvider"
import { Home } from "./Home"
import { About } from "./About"

export const ApplicationViews = () => {
    return (
    <>
   <Route exact path="/home">
       <Home />
    </Route> 

   <Route exact path="/about">
       <About />
    </Route> 
    
    <ProductProvider>
    <Route exact path="/groceries">
        <GroceryList/>
    </Route>
    </ProductProvider>
    </>
    )
}