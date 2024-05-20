
function About() {
  return (
    <section>
      <article className="about">
        <div className="about-content">
          <div className="restaurant-desc">
            <h1 className="desc-title">Little Lemon</h1>
            <h2 className="desc-subtitle">Chicago</h2>
            <p className="desc-text">
              Based in Chicago, Illinois, Little Lemon is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. <br/>
              The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12-15 items that they rotate seasonally. <br/>
              The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day. <br/>
              Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. <br/>
              To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. <br/>
              Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the mediterranean region.
            </p>
          </div>
          <img className="desc-img" src="../images/Mario and Adrian A.jpg" alt="Mario and Adrian"/>
        </div>
      </article>
    </section>
  )
}

export default About;