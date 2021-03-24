import React from "react"
import { Route } from "react-router-dom"
import { ProductProvider } from "./Grocery/GroceryProvider"
import { GroceryList } from "./Grocery/GroceryList"
import {GroceryForm} from "./Grocery/GroceryForm"
import {UserProvider} from "./Users/UserProvider"
import {UserList} from "./Users/UserList"
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
            <UserProvider>
           <Route exact path="/groceries">
            <GroceryList/>

                </Route>
                <Route path="/groceries/create">
                    <GroceryForm />
                </Route>
                < Route path="/orders/edit/:productId(\d+)">
                    <GroceryForm/>
                </Route>
                <Route path="/groceries/details/${product.id}">
                    <GroceryDetail/> 
                </Route>
             <Route exact path="/orders">
                <UserProvider>
                    <UserList />
                </UserProvider>
            </Route>
            </UserProvider>
        </LocationProvider>
    </ProductProvider>

            

      

    </>
    )
}