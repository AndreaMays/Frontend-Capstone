import React, {useContext, useEffect } from "react"
import {ChildContext} from "./ChildProvider"
import { useHistory } from "react-router"
import {ChildCard} from "./ChildCard"

export const ChildrenList = () => {
    const {childForms, getChildForms} = useContext(ChildContext)
    
    const history = useHistory()
    console.log("kids", childForms)

    useEffect (() => {
        getChildForms()
    }, [])
    
    return(
        <>
        <div className="childList">
            <h2> Child List and Registration</h2>
            <p>Please register your child below for products or services needed.</p>

        <button className="addButton" onClick={() => {history.push("/children/create")}}>
              "Child Form Sign Up"
        </button>

            {
                childForms.map(cf => {
                    // console.log("map",cf)
                    return <ChildCard key={cf.id} form={cf}/>
                })
            }
        </div>
        </>
        )
    }