import { Link } from "react-router-dom";

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
                    <a href="#" className="footer-item">Menu</a>
                    <a href="/booking" className="footer-item">Reservations</a>
                    <a href="#" className="footer-item">Order Online</a>
                    <a href="#" className="footer-item">Login</a>
                </div>

                <div className="footer-col">
                    <p className="footer-head">
                        Contact
                    </p>
                    <a href="#" className="footer-item">Address</a>
                    <a href="#" className="footer-item">Phone Number</a>
                    <a href="#" className="footer-item">Email</a>
                </div>

                <div className="footer-col">
                    <p className="footer-head">
                        Social Media Links
                    </p>
                    <a href="#" className="footer-item">Facebook</a>
                    <a href="#" className="footer-item">Instagram</a>
                    <a href="#" className="footer-item">Twitter</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;