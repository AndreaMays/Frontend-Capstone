import React, {useState, createContext} from "react"

export const ChildContext = createContext()

export const ChildProvider = (props) => {
    const [childForms, setChildForms] = useState([])


    const getChildForms = () => {
        return fetch ("http://localhost:8088/children")
        .then(res => res.json())
        .then(setChildForms)
    }

    const addChildForm = (childFormObj) => {
        return fetch ("http://localhost:8088/children", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(childFormObj)
        })
        .then(getChildForms)
    }

    const deleteChildForm = ChildId => {
        return fetch (`http://localhost:8088/children/${ChildId}`, {
        method: "DELETE"
        })
        
    }  

    const updateChildForms = ChildrenObj => {
        return fetch(`http://localhost:8088/products/${ChildrenObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(ChildrenObj)
        })
        .then(getChildForms)
    }

    return (
        <ChildContext.Provider value={{
            childForms, getChildForms, addChildForm, deleteChildForm, updateChildForms
        }}>
            {props.children}
        </ChildContext.Provider>
    )
    
}