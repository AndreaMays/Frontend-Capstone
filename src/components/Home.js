import React from "react"
// import {PropsandState} from './PropsAndState'
import "./Home.css"
import {Jumbotron, Card, Row, Image, Col, Carousel} from "react-bootstrap"

export const Home = () => (
    <>
    <section>
 <div class="homeWelcome">Welcome to A.R.C.C. </div>
 <div class="homeTextHeader">
    This website is dedicated to reaching members of the South Nashville community with resources during the pandemic.
    </div>
 </section>

<Card className="bg-dark text-white">
 
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
<Card.Footer>@ARCCapp2021 <br></br>           Email:agape@resource.center </Card.Footer>
</>
)