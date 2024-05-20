import { Link } from "react-router-dom"
import Nav from "./Nav";

function Header() {

  return (
    <header>
      <Link to="/"><img src="/images/littlelemon.png" alt="little lemon"/></Link>
      <Nav/>
    </header>
  )
}

export default Header;