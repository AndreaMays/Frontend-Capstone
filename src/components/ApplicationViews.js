import React from "react"
import { Route } from "react-router-dom"
import { GroceryCard } from "./Grocery/GroceryCard"


export const ApplicationViews = () => {
    return (
    <>
    {/* <Route exact path="/home">
    </Route>

    <Route exact path="/about">
    </Route> */}

    <h2>Grocery List and Registration</h2>
    <GroceryCard>
    <Route exact path="/groceries">
    </Route>
    </GroceryCard>
    </>
    )
}