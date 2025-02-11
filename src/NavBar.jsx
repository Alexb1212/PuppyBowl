import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav id="nav">
      <Link to= '/'>Home Page</Link>
      <Link to= '/NewPuppy'>Submit New Puppy</Link>
    </nav>
  )
}

export default NavBar;