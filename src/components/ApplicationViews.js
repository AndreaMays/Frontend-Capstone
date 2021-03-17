import React from "react"
import { Route } from "react-router-dom"
import { GroceryList } from "./Grocery/GroceryList"
import { GroceryProvider } from "./Grocery/GroceryProvider"


export const ApplicationViews = () => {
    return (
    <>
    {/* <Route exact path="/home">
    </Route>

    <Route exact path="/about">
    </Route> */}

    <h2>Grocery List and Registration</h2>
    <GroceryProvider>
    <Route exact path="/groceries">
        <GroceryList/>
    </Route>
    </GroceryProvider>
    </>
    )
}