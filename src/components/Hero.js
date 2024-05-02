
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
                        <button className="reserve-btn btn">
                            Reserve a Table
                        </button>
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