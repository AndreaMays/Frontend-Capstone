import { Link } from "react-router-dom"

export const NavBar = (props) => {
  return (
    <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="nav-link" to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/groceries">Groceries</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/children">Children</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/donations">Donations</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/events">Events</Link>
        </li> */}
      </ul>
    </nav>
  )
}