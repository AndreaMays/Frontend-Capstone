import React, {useState, createContext } from "react"
import { GroceryCard } from "./GroceryCard"
export const EventContext, GroceryContext = createContext()

export const GroceryProvider = (props) => {
    const [groceries, setGroceries] = useState({})

    // console.log("Hungry", getGroceries)
    // NOTE: line 11 -15 function is used in the GroceryList.js. We get groceries from db.json, return what we get, 
    // return it into json then set the Groceries with the useState function.
    const getGroceries = () => {
        return fetch ("http://localhost:8088/groceries")
        .then(res => res.json)
        .then(setGroceries)
    }

    // const addGroceries = (groceryObj) => {
    //     return fetch ("http://localhost:8088/groceries"), {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(groceryObj)
    //     }
    //     .then(getGroceries)
    // }

    // const deleteGrocery = groceryId => {
    //     return fetch (`http://localhost:8088/groceries/${groceryId}`,{
    //         method: "DELETE"
    //     })
    //     .then(getGroceries)
    // }

    // const updateGrocery = grocery => {
    //     return fetch(`http://localhost:8088/groceries/${grocery.id}`, {
    //     method: "PUT",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(grocery)
    //     })
    //     .then(getGroceries)
    // }

    // const getGroceryById = (id) => {
    //     return fetch(`http://localhost:8088/groceries${id}`)
    //     .then(res => res.json())
    // }

    return (
        <GroceryCard.Provider value={{
            groceries, getGroceries, addGroceries, deleteGrocery, updateGrocery, getGroceryById
        }}>
            {props.children}
        </GroceryCard.Provider>
    )
}