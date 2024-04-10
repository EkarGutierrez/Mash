import "./home.css";
import Topbar from '../components/Topbar/Topbar'
import Rightbar from "../components/Rightbar/Rightbar";
import Feed from "../components/Feed/feed"
import Leftbar from "../components/Leftbar/Leftbar"

export default function Home() { 
    return(
        <>
            <Topbar/>
            <div className="Homecontainer">
                <Leftbar/>
                <Feed/>
                <Rightbar/>
            </div>
            
        </>
    );
}