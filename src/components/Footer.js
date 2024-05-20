import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

function Footer() {
    return (
        <footer>
            <img src="/images/logo_footer.png" alt="little lemon"/>
            <div className="footer-content">
                <div className="footer-col">
                    <p className="footer-head">
                        Navigtion
                    </p>
                    <Link to="/" className="footer-item">Home</Link>
                    <Link to="/about" className="footer-item">About</Link>
                    <Link to="/menu" className="footer-item">Menu</Link>
                    <Link to="/booking" className="footer-item">Reservations</Link>
                    <Link to="order-online" className="footer-item">Order Online</Link>
                    <Link to="login" className="footer-item">Login</Link>
                </div>

                <div className="footer-col">
                    <p className="footer-head">
                        Contact
                    </p>
                    <p className="footer-item">
                    <IconContext.Provider value={{ color: "#EDEFEE", size: "15px", style: {marginRight: "10px"}}}>
                        <FaLocationDot />
                    </IconContext.Provider>
                        678 Pisa Ave, Chicago, IL 60611
                    </p>
                    <p className="footer-item">
                        <IconContext.Provider value={{ color: "#EDEFEE", size: "15px", style: {marginRight: "10px"}}}>
                            <FaPhone />
                        </IconContext.Provider>
                        (312) 593-2744
                    </p>
                    <p className="footer-item">
                        <IconContext.Provider value={{ color: "#EDEFEE", size: "15px", style: {marginRight: "10px"}}}>
                            <IoMdMail />
                        </IconContext.Provider>
                        customer@littlelemon.com
                    </p>
                </div>

                <div className="footer-col">
                    <p className="footer-head">
                        Social Media Links
                    </p>
                    <a href="https://facebook.com" className="footer-item">Facebook</a>
                    <a href="https://instagram.com" className="footer-item">Instagram</a>
                    <a href="https://twitter.com" className="footer-item">Twitter</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;