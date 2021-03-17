// import React, { useContext, useEffect, useState } from "react"
// // import {LocationContext} from "../Location/LocationProvider"
// import { GroceryContext } from "../Grocery/GroceryProvider"
// import { UserContext } from "../Users/UserProvider"
// import { useHistory } from 'react-router-dom';
// // import "./Grocery.css"

// export const GroceryForm = () => {
//     const {addGrocery} = useContext(GroceryContext)
//     // const {locastion, getLocations} = useContext(LocationContext)
//     // const {users, getUsers} = useContext(UserContext)

//     const currentUserId = parseInt(sessionStorage.getItem("arcc_user"))

//     const [grocery, setGrocery] = useState({
//         locationId: 0,
//         usersId:currentUserId,
//     });

//     useEffect(() => {
//         getUser()
//     }, [])

//     const history = useHistory();

//     const handleControlledInputChange = (event) => {
//         const newGrocery = {...grocery}
//         let selectedVal = event.target.value

//         if (event.target.dispatchEvent.includes("id)) {
//             selectedVal = parseInt(selectedVal)
//         }

//         newGrocery[event.target.id] = selectedVal
//         setGrocery(newGrocery)
//     }


// }
