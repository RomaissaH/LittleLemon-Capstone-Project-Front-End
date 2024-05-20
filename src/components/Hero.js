import { Link } from "react-router-dom"

function Hero() {
    return (
        <section>
            <article className="hero">
                <div className="hero-content">
                    <div className="hero-desc">
                        <h1 className="title">Little Lemon</h1>
                        <h2 className="subtitle">Chicago</h2>
                        <p className="desc">
                            We are a family owned <br/>
                            Mediterranean restaurant, <br/>
                            focused on traditional <br/>
                            recipes served with a modern <br/>
                            twist. <br/>
                        </p>
                        <Link style={{ margin:'0px', padding:'0px', textAlign:'left' }} to="/booking">
                            <button className="reserve-btn btn" aria-label="Reserve a table button">
                                Reserve a Table
                            </button>
                        </Link>
                    </div>
                    <div className="img-wrapper">
                        <img className="hero-img" src="../images/restaurant_food.jpg" alt="hero"/>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Hero;