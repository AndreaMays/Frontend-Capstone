// import { Link } from "react-router-dom"
import Nav from 'react-bootstrap/Nav'

export const NavBar = (props) => {
  return (
    
    <Nav justify variant="tabs" defaultActiveKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/groceries">Groceries</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/children"> Children</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/donations"> Donations</Nav.Link>
    </Nav.Item>
  </Nav>
 
  

  )
}