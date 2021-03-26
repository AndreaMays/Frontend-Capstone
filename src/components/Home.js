import React from "react"
// import {PropsandState} from './PropsAndState'
import "./Home.css"
import {Jumbotron, Card, Row, Image, Col} from "react-bootstrap"

export const Home = () => (
    <>
 

<Card className="bg-dark text-white">
  <Card.Img class="homeImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfgpJ5CP8Rrn0P-Yr3LqsZRFCi003uPg5Jtg&usqp=CAU" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title class="homeWelcome">Welcome to A.R.C.C.</Card.Title>
    <Card.Text class="homeText">
    This is a webiste to connect resources to the South Nashville Community.
    </Card.Text>
    <Card.Text></Card.Text>
  </Card.ImgOverlay>
</Card>

</>
)