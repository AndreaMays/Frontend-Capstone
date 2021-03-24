import React, { useContext, useEffect, useState } from "react"
import { ProductContext } from "../Grocery/GroceryProvider"
// import "./Grocery.css"
import { useParams, useHistory } from "react-router-dom"

export const GroceryDetail = () => {
  const { getProductById, deleteProduct, updateProduct } = useContext(ProductContext)

  // console.log("curious", product)
	const [product, setProduct] = useState({})

	const {productId} = useParams();

	const history = useHistory();

  useEffect(() => {
    // console.log("useEffect", productId)
    getProductById(productId)
    .then((response) => {
      setProduct(response)
    })
    }, [])

    const handleRelease = () => {
        deleteProduct(product.id)
        .then(() => {
            history.push("/groceries")
        })
    }


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