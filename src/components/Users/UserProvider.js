import React, {useState, createContext } from "react"

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [users, setUsers] = useState([])
    const [userMenus, setUserMenus] = useState([])

    const getUsers = () => {
        return fetch ("http://localhost:8088/users")
        .then(res => res.json())
        .then(setUsers)
    }

    const getUserMenus = () => {
        return fetch ("http://localhost:8088/products?_expand=groceryMenu")
        .then(res => res.json())
        .then(setUserMenus)
    }

//     const addUserMenus = () => {
//         return fetch ("http://localhost:8088/products?_expand=groceryMenu"), {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(productObj)
//             })
//             .then(getProducts)
    return (
        <UserContext.Provider value={{
            users, getUsers, userMenus, getUserMenus
        }}>
            {props.children}
        </UserContext.Provider>
    )
}
