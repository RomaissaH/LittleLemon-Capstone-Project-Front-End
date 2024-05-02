import { IconContext } from "react-icons";
import { MdDeliveryDining } from 'react-icons/md';

function Highlights() {
    return (
        <section>
            <article className="menu">
                <div className="menu-desc">
                    <h1 className="menu-title">This weeks specials!</h1>
                    <button className="btn">
                        Online Menu
                    </button>
                </div>
                <div className="cards">
                    <div className="card">
                        <img className="menu-img" src="/images/greek salad.jpg" alt="greek salad"/>
                        <div className="name-price">
                            <h2 className="item-name">Greek Salad</h2>
                            <p className="item-price">$12.99</p>
                        </div>
                        <div className="item-desc">
                            <p>
                                The famous greek salad of crispy lettuce,
                                peppers, olives and our Chicago style feta cheese,
                                garnished with crunchy garlic and rosemary croutons.
                            </p>
                        </div>
                        <div className="delivery">
                            <a href="#" className="delivery-item">Order a delivery</a>
                            <IconContext.Provider value={{ color: "#333333", size: "30px" }}>
                                <MdDeliveryDining />
                            </IconContext.Provider>
                        </div>
                    </div>

                    <div className="card">
                        <img className="menu-img" src="/images/bruschetta.jpg" alt="bruchetta"/>
                        <div className="name-price">
                            <h2 className="item-name">Bruchetta</h2>
                            <p className="item-price">$5.99</p>
                        </div>
                        <div className="item-desc">
                            <p>
                                Our Bruschetta is made from grilled bread that has
                                been smeared with garlic and seasoned with salt and olive oil.
                            </p>
                        </div>
                        <div className="delivery">
                            <a href="#" className="delivery-item">Order a delivery</a>
                            <IconContext.Provider value={{ color: "#333333", size: "30px" }}>
                                <MdDeliveryDining />
                            </IconContext.Provider>
                        </div>
                    </div>

                    <div className="card">
                        <img className="menu-img" src="/images/lemon dessert.jpg" alt="lemon-dessert"/>
                        <div className="name-price">
                            <h2 className="item-name">Lemon Dessert</h2>
                            <p className="item-price">$5.00</p>
                        </div>
                        <div className="item-desc">
                            <p>
                                This comes straight from grandma’s recipe book,
                                every last ingredient has been sourced and is as
                                authentic as can be imagined.
                            </p>
                        </div>
                        <div className="delivery">
                            <a href="#" className="delivery-item">Order a delivery</a>
                            <IconContext.Provider value={{ color: "#333333", className: "icon", size: "30px" }}>
                                <MdDeliveryDining />
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Highlights;