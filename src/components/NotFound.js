import { IconContext } from "react-icons";
import { TbError404 } from "react-icons/tb";




function NotFound() {
    return (
        <div className="container page-not-found">
            <IconContext.Provider value={{ color: "#333333", size: "100px" }}>
                <TbError404 />
            </IconContext.Provider>
            <h2>Page not found</h2>
        </div>
    );
};

export default NotFound;
