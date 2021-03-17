import { Card } from "react-bootstrap"
import { CardDeck } from "react-bootstrap"
import Figure from 'react-bootstrap/Figure'
import React from "react"

export const GroceryCard = (groceries, products) =>  (
  <>
  <p>Welcome to the "A.R.C.C." app's resource page for groceries. We count it a privelege to be able to provide
    groceries for our community members. Please read through each weeks groceries below. When you are ready, click the 
    "Add Groceries" button. On the form, please select your location for "pick-up" or "drop-off". One reminder our drop-off
    locations are very specific, so if you are not in that specific community or living on the street listed under
    "locations" you will most likely need to pickup at the church. 
    
<br/>
    Also on the form, you may select the weeks that you need groceries or select "all weeks". If you are in need of extra groceries
    or have a specific item that needs to be left out of the pre-made bag, i.e. peanut butter due to peanut allergies, 
    please be sure to notate that in the "message" box on the form. 
  </p>
<CardDeck>
  <Card>
  <Card.Img variant="top" src={groceries.image} />
      <Card.Body>
      <Card.Title>{products.groceryTitle}</Card.Title>
      <Card.Text>
       {groceries.name}
      </Card.Text>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>April 2021: Grocery Items Week 2</Card.Title>
      <Card.Text>
      Grocery Items: 
        <li>2 Cans of Tuna </li>
        <li>1 Bag Dry Black Beans </li>
        <li>1lb Dry White Rice </li>
        <li>1lb Dry Oatmeal </li>
        <li>Breakfast Bars </li>
        <li>2 Boxes of Mac and Cheese</li>
        <li>1lb of Carrots</li>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>April 2021: Grocery Items Week 3</Card.Title>
      <Card.Text>
      Grocery Items: 
        <li>1 Box Dry Spaghetti</li>
        <li>1 Jar Spaghetti Sauce </li>
        <li>1 Box of Cake Mix </li>
        <li>1 Box of Cheerios </li>
        <li>3 Small boxes Chocolate Milk</li>
        <li>2 Cans mixed fruit</li>
        <li>2 Cans Beef Stew</li>
      </Card.Text>
    </Card.Body>
  </Card>

<Card>
  <Card.Img variant="top" src="holder.js/100px160" />
  <Card.Body>
    <Card.Title>April 2021: Grocery Items Week 4</Card.Title>
    <Card.Text>
    Grocery Items: 
      <li>1 Gallon Milk</li>
      <li>Frozen Chicken Legs</li>
      <li>1lb of Onions</li>
      <li>5lbs Potatoes </li>
      <li>1lb of Cheese</li>
      <li>2lb bag of Apples</li>
      <li>1 pint of Strawberry Yogurt</li>
      <li>1 pint of Sour Cream</li>

    </Card.Text>
  </Card.Body>
</Card>
</CardDeck>
</>
)



// variant="bottom"