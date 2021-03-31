import React, { useContext, useEffect, useState } from "react"
import { ProductContext } from "../Grocery/GroceryProvider"
// import "./Grocery.css"
import { useParams, useHistory } from "react-router-dom"

export const GroceryDetail = () => {
   // "useContext" below is pulling the data from the "ProductContext" I set in the "Grocery Provider".
    // the "useContext" is a hook in React that is gathering all the data from the Gocery Provider and passing that infor
    // to the other components I choose to use the "useContext" in. 
  const { getProductById, deleteProduct, updateProduct } = useContext(ProductContext)

  // console.log("curious", product)

	const [product, setProduct] = useState({})

  // the "useParams" is being set with the "productId" from the URL link in application views. 
  // "useParams" is basically a "key/value pair" meaning the "product is the key" and the "id" is the value. 
	const {productId} = useParams();

  // "useHistory" is a method provided by "reac-router-dom" that i can use to navigate. 
  // "useHistory" gives me access to the url history that i need to navigate. (i.e. "history.push")
	const history = useHistory();

  // "useEffect" is a react funtion. The "dependency array", only allows this function to run one time. (Rememeber your
// infinite loop situation when I didn't put the array brackets at the bottom.). This is done to help pull the information
// from the fetch calls, because the information is not pulled during the render. So basically it goes, "initial render",
// then useEffect with the empty array/dependecy array, then runs the return. After the return, the useEffect fetches the 
// information and then fills the array with information, then from there it goes to the "useState"
  useEffect(() => {
    // console.log("useEffect", productId)
    getProductById(productId)
    .then((response) => {
      setProduct(response)
    })
    }, [])

// the below function is delete the product when the "delete button" is clicked.  The deleteProduct is invoked and being 
// passed the "product.id" so the at the function can pinpoint exactly which product to delete.
    const handleRelease = () => {
        deleteProduct(product.id)
        .then(() => {
            history.push("/groceries")
        })
    }

// below i am returning a form that will render the results of the grocery form. I am using "dot.notation" with the 
// variable "product" from "useState"
  return (
    <section className="grocery">
      <h3 className="grocery__location">Location: {product.locationId}</h3>
        console.log()
      <div classname="userOrders">
      <div className="groceryWeek">{product.title}</div>
      <div className="groceryMessage">Location: {product.message}</div>

      <div>
      <button className="deleteGroceryButton" onclick={handleRelease}>Delete</button>
      <button className="editGroceryButton" onclick={() => { history.push(`/groceries/edit/${product.id}`)}}>Edit</button>
      </div>
      
     </div>
    </section>
  )
}