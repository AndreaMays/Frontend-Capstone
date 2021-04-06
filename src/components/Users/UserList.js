import React, { useContext, useEffect } from "react"
import { UserContext } from "./UserProvider"
import { UserMenuCard} from "./UserMenuCard"
import "./User.css"

export const UserList = () => {
  
    const {groceryForms, getGroceryForms } = useContext(UserContext)

   

        
        useEffect(() => {
            getGroceryForms()

        }, [])
        

    const currentUserId = parseInt(sessionStorage.getItem("app_user_id"))

    // const userOrder = products.filter(user => currentUserId === user.Id)
    const userForms = groceryForms.filter(gf => currentUserId === gf.userId)
    
 
    
  
    return (
        <>
        <div className="userMenuOrder">
        <h2 className="userTitle"> User Menu Order</h2>
    
             
        <p className="userInstructions">Please review your orders. Click the edit button to be taken to your previous grocery order, where your
            can edit your location, week, or add a message for the admin. <br></br>You can also delete your order if it is not 
            needed anymore.
        </p>   
  </div>

<div className="userListMenuCard">
        {
          userForms.map(form => {
            
              return <UserMenuCard key={form.id} userForm={form} />
          })
        }
      </div>
      </>
    )
  }