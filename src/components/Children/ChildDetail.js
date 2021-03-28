import React, { useContext, useEffect, useState } from "react"
import { ChildContext } from "../Children/ChildProvider"
import { useParams, useHistory } from "react-router-dom"

export const ChildDetails = () => {
    const {childForms, getChildForms, deleteChildForm, addChildForm, getChildFormById} = useContext(ChildContext)

  // console.log("curious", childForms)
    const [childForm, setChildForm] = useState({})
    console.log(childForm)

	const {childId} = useParams();

	const history = useHistory();

  useEffect(() => {
    // console.log("useEffect", productId)
    getChildFormById(childId)
    .then((response) => {
      setChildForm(response)
    })
    }, [])

    const handleRelease = () => {
        deleteChildForm(childForm.id)
        .then(() => {
            history.push("/children")
        })
    }


  return (
    <section className="children">
      <h3 className="childName">First Name: {childForm.firstName}</h3>
      <h3 className="childName">First Name: {childForm.lastName}</h3>
         <div classname="childForms">
      {/* <div className="childAge">{product.title}</div>
      <div className="groceryMessage">Location: {product.message}</div> */}

      <div>
      <button className="deleteChildFormButton" onclick={handleRelease}>Delete</button>
      <button className="editGroceryButton" onclick={() => { history.push(`/children/edit/${childForms.id}`)}}>Edit</button>
      </div>
      
     </div>
    </section>
  )
}