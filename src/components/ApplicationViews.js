import React from "react"
import { Route } from "react-router-dom"
import { ProductProvider } from "./Grocery/GroceryProvider"
import { GroceryList } from "./Grocery/GroceryList"
import {GroceryForm} from "./Grocery/GroceryForm"
import {GroceryDetail} from "./Grocery/GroceryDetails"
import {LocationProvider} from "./Location/LocationProvider"
import {LocationList} from "./Location/LocationList"
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
        <LocationProvider>
        <Route exact path="/groceries">
            <GroceryList/>

        </Route>
        <   Route path="/groceries/create">
                <GroceryForm />
            </Route>
            < Route path="/groceries/edit/:groceriesId(\d+)">
                <GroceryForm/>
            </Route>
            <Route path="/groceris/detail/:productId(\d+)">
            <GroceryDetail/> 
            </Route>
        </LocationProvider>
    </ProductProvider>

   

            {/* Render the loctation list when http://localhost:3000/animals */}
                {/* <Route path="/locations">
                    <LocationProvider>
                        <LocationList />
                    </LocationProvider>
                </Route>     */}
    </>
    )
}