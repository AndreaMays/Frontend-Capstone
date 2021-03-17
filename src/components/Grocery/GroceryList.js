import React, {useContext, useEffect } from "react"
import {GroceryContext} from "/.GroceryProvider"
import { GroceryCard } from "./GroceryCard"
import { useHistory } from "react-router"

export const GroceryList = () => {
    const { groceries, getGroceries } = useContext(GroceryContext)

    useEffect(() => {
        getGroceries()
    }, [])

    return (
        <>
        <div className="groceries">
        <Button variant="addButton" onClick={() => {history.pushState("/groceries")}}>Add Grocery</Button>{' '}

        {
            groceries.map(grocery => {
                return <GroceryCard key={grocery.id} article={grocery}/>
            })
        }
        </div>
        </>
    )
}