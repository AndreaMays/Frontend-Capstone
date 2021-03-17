import React, {useContext, useEffect } from "react"
import {GroceryContext} from "./GroceryProvider"
import { GroceryCard } from "./GroceryCard"
import { useHistory } from "react-router"
import { Button } from "react-bootstrap"

export const GroceryList = () => {
    const { groceries, getGroceries } = useContext(GroceryContext)
    const history = useHistory()

    useEffect(() => {
        getGroceries()
    }, [])

    return (
        <>
        <div className="groceries">
        <h2>Grocery List and Registration</h2>
        <Button variant="addButton" onClick={() => {history.pushState("/groceries/create")}}>Add Grocery</Button>{' '}
        <p>
        <Button variant="primary">Learn more</Button>
        </p>

        {
            groceries.map(grocery => {
                return <GroceryCard key={grocery.id} grocery={grocery}/>
            })
        }
        </div>
        </>
    )
}