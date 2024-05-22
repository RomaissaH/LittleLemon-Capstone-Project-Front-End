import { Link } from "react-router-dom"
import { IconContext } from "react-icons";
import { FaRegCircleCheck } from "react-icons/fa6";

function ConfirmedBooking() {
    return (
      <main className="confirmed-main">
        <IconContext.Provider value={{ color: "#495e57", size: "50px" }}>
            <FaRegCircleCheck />
        </IconContext.Provider>
       <h2 className="subtitle confirmed-title">Your reservation has been confirmed.</h2>
       <p className="desc confirmed-desc">Please provide your name and contact number at the reception upon arrival.</p>
       <Link style={{ margin:'0px', padding:'0px', textAlign:'left' }} to="/">
            <button className="reserve-btn btn" aria-label="Back to home button">
                Go to home
            </button>
        </Link>
      </main>
    )
  }

  export default ConfirmedBooking;