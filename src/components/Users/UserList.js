// import React, { useContext, useEffect } from "react"
// import { UserContext } from "./UserProvider"
// import { UserCardMenus} from "./UserMenuCard"
// import { ProductContext} from "../Grocery/GroceryProvider"
// import "./User.css"

// export const UserList = () => {
  
//     const {getUserMenus, userMenus } = useContext(UserContext)

   

        
//         useEffect(() => {
//             getUserMenus()

//         }, [])
        
//     // console.log(groceryMenus)

//     // console.log(userMenus)
//     const currentUserId = parseInt(sessionStorage.getItem("app_user_id"))

//     // const userOrder = products.filter(user => currentUserId === user.Id)
 
  
//     return (
//         <>
//         <div className="userMenuOrder">
//         <h2>User Menu Order</h2>
    
             
//         <p>Please review your orders. Click the Details button to be taken to your previous grocery orders, where your
//             can "edit" or "delete" your order if needed.
//         </p>   
  

//         {
//           userMenus.map(user => {
//               console.log(user)
//               return <UserCardMenus key={user.id} userMenu={user} />
//           })
//         }
//       </div>
//       </>
//     )
//   }