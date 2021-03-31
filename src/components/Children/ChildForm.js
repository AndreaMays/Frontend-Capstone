import React, { useContext, useEffect, useState } from "react"
import { ChildContext } from "./ChildProvider"
import { useHistory, useParams } from 'react-router-dom';
import {Form, Col} from "react-bootstrap"
import {ProductContext} from "../Grocery/GroceryProvider"

export const ChildForm = () => {
    const {childForms, getChildForms, getChildFormById, addChildForm, updateChildForms} = useContext(ChildContext)
    
    
    const [isLoading, setIsLoading] = useState(true)

    const { childId } = useParams()

    const history = useHistory()

    const currentUserId = parseInt(sessionStorage.getItem("app_user_id"))

    const [childInfo, setChildInfo] = useState({
        userId: currentUserId,
        firstName: "",
        lastName: "",
        age: "",
        message: "",
        gender: "",
        coatSize: "",
        pantSize: "",
        shirtSize: "",
        message: ""
    });
    
    // This is useEffect is to edit and update the form
    useEffect(() => {
            getChildForms().then(() => {
                    if(childId){
                        getChildFormById(childId)
                            .then(setChildInfo)
                            }
                
                    })
                }, [])
                
                const handleControlledInputChange = (event) => {
                    // console.log(event.target.id)
                    const newChildInfo = {...childInfo}
                    let selectedVal = event.target.value
                    
                    newChildInfo[event.target.id] = selectedVal
                    setChildInfo(newChildInfo)
                }

                const handleClickSaveEditChildForm = () => {
                    if(childInfo === 0) {
                        window.alert("Please fill in all child info")
                    } else {
                        setIsLoading(true);
                        // console.log(grocery.id)
                        if (childId && childInfo.userId === currentUserId) {
                            updateChildForms({
                                userId: currentUserId,
                                firstName: "",
                                lastName: "",
                                age: "",
                                gender: "",
                                coatSize: "",
                                pantSize: "",
                                shirtSize: "",
                                message: "",
                                id: childId
                            })
                        .then(() => history.push(`/children`)) 
                       } else {
                        addChildForm({
                            userId: currentUserId,
                            firstName: "",
                            lastName: "",
                            age: "",
                            gender: "",
                            coatSize: "",
                            pantSize: "",
                            shirtSize: "",
                            message: ""
                        })
                        .then(() => history.push("/children"))
                        }
                    }
                }

                useEffect(() => {
                    getChildForms().then(() => {
                        if (childId) {
                            getChildFormById(childId)
                            .then(childForm => {
                                setChildInfo(childForm)
                                setIsLoading(false)
                            })
                        } else {
                            setIsLoading(false)
                        }
                    })
            
                }, [])

                return (
<Form>
<h2 className="childForm__title">{childId ? "Edit Child Form" : "Add Child Form"}</h2>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="FirstName" value={childInfo.firstName} name="childName" id="firstName" onChange={handleControlledInputChange} required autoFocus className="form-control"/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Last Name" value={childInfo.lastName} name="childName" id="lastName" onChange={handleControlledInputChange} required autoFocus className="form-control"/>
    </Form.Group>
  

    <Form.Group as={Col} controlId="formGridAge">
      <Form.Label>Child's Age</Form.Label>
      <Form.Control type="text" placeholder="Childs Age" value={childInfo.age} name="childAge" id="age" onChange={handleControlledInputChange} required autoFocus className="form-control"/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridGender">
      <Form.Label>Child's Gender</Form.Label>
      <Form.Control type="text" placeholder="Child's Gender" value={childInfo.gender} name="childGender" id="gender" onChange={handleControlledInputChange} required autoFocus className="form-control"/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridCoatSize">
      <Form.Label>Child's Coat Size</Form.Label>
      <Form.Control type="text" placeholder="Child's Coat Size" value={childInfo.coatSize} name="childCoatSize" id="coatSize" onChange={handleControlledInputChange} required autoFocus className="form-control"/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPantSize">
      <Form.Label>Child's Pant Size</Form.Label>
      <Form.Control type="text" placeholder="Child's Pant Size" value={childInfo.pantSize} name="childPantSize" id="pantSize" onChange={handleControlledInputChange} required autoFocus className="form-control"/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridShirtSize">
      <Form.Label>Child's Shirt Size</Form.Label>
      <Form.Control type="text" placeholder="Child's Shirt Size" value={childInfo.shirtSize} name="childShirtSize" id="shirtSize" onChange={handleControlledInputChange} required autoFocus className="form-control"/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridMessage">
      <Form.Label>Message</Form.Label>
      <Form.Control as="textArea" type="text" placeholder="Extra Info Message Box" value={childInfo.message} name="message" id="message" onChange={handleControlledInputChange} required autoFocus className="form-control"/>
      <button className="SaveEditButton" disabled={isLoading}  onClick={event => {
                event.preventDefault()
                handleClickSaveEditChildForm()}}> 
                {childId ? "Save Child Form" : "Add Child Form" }
              </button>
    </Form.Group>

  </Form.Row>

</Form>
    )
}