import Nav from "./Nav";
import { Link } from "react-router-dom"

function Header() {

  return (
    <header>
      <Link to="/"><img src="/images/littlelemon.png" alt="little lemon"/></Link>
      <Nav/>
    </header>
  )
}

export default Header;