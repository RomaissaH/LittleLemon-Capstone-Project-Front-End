import { Link } from "react-router-dom"
import { useState } from 'react';
import { IconContext } from "react-icons";
import { FaRegTimesCircle, FaBars } from 'react-icons/fa';

function Nav() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => {
    setIsOpen(!isOpen);
    };

    return (
        <>
            <IconContext.Provider value={{ color: "#333333" }}>
                <div className="mobile-nav" onClick={toggleNav}>
                    {isOpen ? <FaRegTimesCircle /> : <FaBars />}
                </div>
            </IconContext.Provider>

            <nav className={`nav ${isOpen ? 'active' : ''}`} onClick={toggleNav}>
                <ul>
                    <li><Link to="/" className="nav-item">Home</Link></li>
                    <li><Link to="/about" className="nav-item">About</Link></li>
                    <li><Link to="/menu" className="nav-item">Menu</Link></li>
                    <li><Link to="/booking" className="nav-item">Reservations</Link></li>
                    <li><Link to="/order-online" className="nav-item">Order Online</Link></li>
                    <li><Link to="/login" className="nav-item">Login</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;