import React from "react"
// import {PropsandState} from './PropsAndState'
import "./Home.css"
import {Jumbotron, Card, Row, Image, Col, Carousel} from "react-bootstrap"

export const Home = () => (
    <>
 

<Card className="bg-dark text-white">
  <Card.Img class="homeImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfgpJ5CP8Rrn0P-Yr3LqsZRFCi003uPg5Jtg&usqp=CAU" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title class="homeWelcome">Welcome to A.R.C.C.</Card.Title>
    <Card.Text class="homeTextHeader">
    This is a webiste to connect resources to the South Nashville Community.
    </Card.Text>
    <Card.Text></Card.Text>
  </Card.ImgOverlay>
</Card>

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.sbs.com.au/topics/sites/sbs.com.au.topics/files/gettyimages-503848163.jpg/300x150?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 class="homeTextTitle"></h3>
      <p class="homeText"></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cloudfront-us-east-1.images.arcpublishing.com/gray/LINIGAHJWFMCHMJ6XQP46PHBXY.jpg/300x150?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p class="homeText"></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1607227063002-677dc5fdf96f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8dm9sdW50ZWVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60/300x150?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</>
)