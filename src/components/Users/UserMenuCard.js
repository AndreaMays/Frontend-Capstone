import {useHistory } from "react-router-dom"
import { ProductContext } from "../Grocery/GroceryProvider"
import {useContext} from "react"

export const UserMenuCard = ({ userForm }) => {
    const { deleteProduct } = useContext(ProductContext)

    const history = useHistory();

    const handleRelease = () => {
        deleteProduct(userForm.id)
        .then(() => {
            history.push("/groceries")
        })
    }
    <div>
      <button className="editGroceryButton" onclick={() => { history.push(`/groceries/edit/${userForm.id}`)}}>Edit</button>
      </div>
    
    return(
        <>
        <div>Week: {userForm.groceryMenu.title}</div>
        <div>Location: {userForm.location.name}</div>
        <div>Message: {userForm.message}</div>

        <button className="deleteGroceryButton" onclick={handleRelease}>Delete</button>
    </>
    )
}
