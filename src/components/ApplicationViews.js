import React from "react"
import { Route } from "react-router-dom"
import { ProductProvider } from "./Grocery/GroceryProvider"
import { GroceryList } from "./Grocery/GroceryList"
import {GroceryForm} from "./Grocery/GroceryForm"
import {UserProvider} from "./Users/UserProvider"
import {UserList} from "./Users/UserList"
import {GroceryDetail} from "./Grocery/GroceryDetails"
import {LocationProvider} from "./Location/LocationProvider"
import {ChildProvider} from "./Children/ChildProvider"
import {ChildrenList} from "./Children/ChildList"
import {ChildForm} from "./Children/ChildForm"
import {ChildDetails} from "./Children/ChildDetail"
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
                <ChildProvider>

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

             <Route exact path="/children">
                <ChildProvider>
                    <ChildrenList />
                </ChildProvider>
            </Route>

            <Route path="/children/create">
                    <ChildForm />
                </Route>
                < Route path="/children/edit/:childId(\d+)">
                    <ChildForm/>
                </Route>
                <Route path="/children/details/${childForm.id}">
                    <ChildDetails/> 
                </Route>

                </ChildProvider>
            </UserProvider>
        </LocationProvider>
    </ProductProvider>

            

      

    </>
    )
}