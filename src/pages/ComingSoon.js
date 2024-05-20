import { IconContext } from "react-icons";
import { FaPersonDigging } from 'react-icons/fa6';

function ComingSoon() {
    return (
        <div className="container under-construction">
            <IconContext.Provider value={{ color: "#333333", size: "100px" }}>
                <FaPersonDigging />
            </IconContext.Provider>
            <h2>Page under construction</h2>
        </div>
    );
};

export default ComingSoon;
