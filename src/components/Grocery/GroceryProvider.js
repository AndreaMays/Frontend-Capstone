import React, {useState, createContext } from "react"
import { GroceryCard } from "./GroceryCard"

export const EventContext = createContext()
export const ProductContext = createContext()

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])
    const [groceryMenus, setGroceryMenus] = useState([])
    const [groceryMenuProducts, setGroceryMenuProducts] = useState([])
    const [groceries, setGroceries] = useState([])

    // console.log("Hungry", getGroceries)
    // NOTE: line 11 -15 function is used in the GroceryList.js. We get groceries from db.json, return what we get, 
    // return it into json then set the Groceries with the useState function.
    // then after 18 go to grocery list
    const getProducts = () => {
        return fetch ("http://localhost:8088/products")
        .then(res => res.json())
        .then(setProducts)
    }

    const addProduct = (productObj) => {
        return fetch ("http://localhost:8088/products"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productObj)
        }
        .then(getProducts)
    }

    const deleteProduct = ProductId => {
        return fetch (`http://localhost:8088/products/${ProductId}`,{
            method: "DELETE"
        })
        .then(getProducts)
    }

    const updateProduct = productObj => {
        return fetch(`http://localhost:8088/products/${productObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(productObj)
        })
        .then(getProducts)
    }

    const getProductById = (id) => {
        return fetch(`http://localhost:8088/products${id}`)
        .then(res => res.json())
    }
// GET JOIN TABLE GROCERIES AND MENU BELOW

    const getAllGroceryMenus = () => {
        return fetch (`http://localhost:8088/groceryMenus`)
        .then(res => res.json())
        .then(setGroceryMenus)
    }

    // function below we are getting the groceryMenu join table with the groceryMenuId and the productItemId
    // then setting putting it into json, then setting it into "SetGroceryMenuProducts"
    const getGroceryMenuProdItem = () => {
        return fetch(`http://localhost:8088/groceryMenuProdItems?_expand=groceryMenu&_expand=productItem`)
        .then(res => res.json())
        .then(setGroceryMenuProducts)
    }

    // below we are getting the product items, putting it into json then setting it into "setProductItems"
    const getGroceries = () => {
        return fetch(`http://localhost:8088/productItems`)
        .then(res => res.json())
        .then(setGroceries)
    }

    // pull groceryMenuProdItem id to pull the product items on line 62
    return (
        <ProductContext.Provider value={{
            products, getProducts, addProduct, deleteProduct, updateProduct, getGroceryMenuProdItem, setGroceries, getGroceries,
            getProductById, getAllGroceryMenus, groceryMenus, groceryMenuProducts, groceries
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

// ProductContext is a bag holding all the provider products above
// purple on line 65 is set as "useState". the orange color words are "functions"

