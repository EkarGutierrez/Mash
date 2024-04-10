import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar() {
    return (
        <div className="TopbarContainer">
            <div className="TopbarLeft">
                <span className="logo">Mash</span>
            </div>
            <div className="TopbarCenter">
                <div className="searchbar">
                    <SearchIcon className="searchIcon"/>
                    <input placeholder="Search for events" className="searchInput"></input>
                </div>
            </div>
            <div className="TopbarRight">
                <div className="TopbarLinks">
                    <span className="topbarLink">Home</span>
                    <span className="topbarLink">Calendar</span>
                </div>
                <div className="TopbarIcons" >
                <div className="topbarIconItem">
                        <NotificationsIcon/>
                        <span className="TopbarIconBadge">3</span>
                    </div>
                    <div className="topbarIconItem">
                        <MessageIcon/>
                        <span className="TopbarIconBadge">1</span>
                    </div>
                </div>
                <div className="profileIcon">
                        <PersonIcon/>
                    </div>
            </div>
        </div>
    )
}