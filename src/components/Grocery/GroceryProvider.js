import React, {useState, createContext } from "react"
import { GroceryCard } from "./GroceryCard"

export const EventContext = createContext()
export const ProductContext = createContext()

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])

    // console.log("Hungry", getGroceries)
    // NOTE: line 11 -15 function is used in the GroceryList.js. We get groceries from db.json, return what we get, 
    // return it into json then set the Groceries with the useState function.
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

    const updateProduct = Product => {
        return fetch(`http://localhost:8088/products/${Product.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Product)
        })
        .then(getProducts)
    }

    const getProductById = (id) => {
        return fetch(`http://localhost:8088/products${id}`)
        .then(res => res.json())
    }

    return (
        <ProductContext.Provider value={{
            products, getProducts, addProduct, deleteProduct, updateProduct, getProductById
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

