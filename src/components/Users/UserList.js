import React, { useContext, useEffect } from "react"
import { UserContext } from "./UserProvider"
import { UserMenuCard} from "./UserMenuCard"
import "./User.css"

export const UserList = () => {
  
    const {groceryForms, getGroceryForms } = useContext(UserContext)

   

        
        useEffect(() => {
            getGroceryForms()

        }, [])
        
    // console.log(groceryMenus)

    // console.log(userMenus)
    const currentUserId = parseInt(sessionStorage.getItem("app_user_id"))

    // const userOrder = products.filter(user => currentUserId === user.Id)
    const userForms = groceryForms.filter(gf => currentUserId === gf.userId)
    
    console.log(userForms)
    
  
    return (
        <>
        <div className="userMenuOrder">
        <h2>User Menu Order</h2>
    
             
        <p>Please review your orders. Click the Details button to be taken to your previous grocery orders, where your
            can "edit" or "delete" your order if needed.
        </p>   
  

        {
          userForms.map(form => {
            
              return <UserMenuCard key={form.id} userForm={form} />
          })
        }
      </div>
      </>
    )
  }