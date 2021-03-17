import React, {useContext, useEffect } from "react"
import {ProductContext} from "./GroceryProvider"
import { GroceryCard } from "./GroceryCard"
import { useHistory } from "react-router"
import { Button } from "react-bootstrap"

export const GroceryList = () => {
    const { products, getProducts } = useContext(ProductContext)
    const history = useHistory()

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
        <div className="groceries">
        <h2>Grocery List and Registration</h2>
        <p>
        <Button variant="primary" className="addButton" onClick={() => {history.pushState("/groceries/create")}}>Add Grocery</Button>
        </p>
 
        {
            products.map(product => {
                return <GroceryCard key={product.id} product={product}/>
            })
        }
        </div>
        </>
    )
}