import React, {useContext, useEffect } from "react"
import {ChildContext} from "./ChildProvider"
import { useHistory } from "react-router"
import {ChildCard} from "./ChildCard"

export const ChildrenList = () => {
    const {childForms, getChildForms} = useContext(ChildContext)
    
    console.log("kids", childForms)

    useEffect (() => {
        getChildForms()
    }, [])
    
    return(
        <>
        <div className="childList">
            <h2> Child List and Registration</h2>
            <p>Please register your child below for products or services needed.</p>

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