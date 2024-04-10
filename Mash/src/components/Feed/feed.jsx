import "./feed.css"
import { Outlet, Link } from "react-router-dom";
import popUp from "./popUp"

export default function Feed() {
    return (
        <div className="feeds">
            <div className="feed">
                <div className="feedTop">
                    <div className="user">
                        <div className="profilePicture">
                            <img></img>
                        </div>
                    </div>
                </div>
                <div className="feedButtom">
                </div>
                <div className="description">
                    <span></span>
                </div>
            </div>
            <Link to={`CreateEvent`}> <button>Create Event</button></Link>
        </div>
    )
}