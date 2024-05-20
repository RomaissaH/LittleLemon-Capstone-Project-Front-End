import { IconContext } from "react-icons";
import { FaStar } from 'react-icons/fa';

function Testimonials() {
    function Star() {
        return <FaStar />;
    }
    return (
        <section>
            <article className="testimonials-parent">
                <h1 className="testimonials-title">What our customers are saying...</h1>
                <div className="testimonials">
                    <div className="testimonial">
                        <div className="name">
                            <img className="reviewer-img" src="/images/user1.png" alt="profile"/>
                            <h2 className="reviewer-name">Alice Smith</h2>
                        </div>
                        <div className="rating">
                            <IconContext.Provider value={{ color: "#F4CE14" }}>
                                {Array.from({ length: 5 }, (_, index) => (
                                    <Star key={index} />
                                ))}
                            </IconContext.Provider>
                        </div>
                        <div className="review-text">
                            <p>
                                The restaurant had a cozy atmosphere and the service was impeccable.
                                I thoroughly enjoyed the variety of dishes on the menu.
                                Will definitely be returning!
                            </p>
                        </div>
                    </div>

                    <div className="testimonial">
                        <div className="name">
                            <img className="reviewer-img" src="/images/user2.png" alt="profile"/>
                            <h2 className="reviewer-name">Bob Johnson</h2>
                        </div>
                        <div className="rating">
                            <IconContext.Provider value={{ color: "#F4CE14" }}>
                                {Array.from({ length: 5 }, (_, index) => (
                                    <Star key={index} />
                                ))}
                            </IconContext.Provider>
                        </div>
                        <div className="review-text">
                            <p>
                                Fantastic food, friendly service, and a cozy atmosphere. Highly recommend!
                            </p>
                        </div>
                    </div>

                    <div className="testimonial">
                        <div className="name">
                            <img className="reviewer-img" src="/images/user3.png" alt="profile"/>
                            <h2 className="reviewer-name">Emily Williams</h2>
                        </div>
                        <div className="rating">
                            <IconContext.Provider value={{ color: "#F4CE14" }}>
                                {Array.from({ length: 5 }, (_, index) => (
                                    <Star key={index} />
                                ))}
                            </IconContext.Provider>
                        </div>
                        <div className="review-text">
                            <p>
                                Had a wonderful dining experience at this restaurant.
                                The staff were friendly and attentive, and the food was absolutely delicious.
                                Can't wait to come back!
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Testimonials;