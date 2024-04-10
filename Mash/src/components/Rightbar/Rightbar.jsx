import "./rightbar.css"

export default function Rightbar(){
    return(
        <div className="mainRight">
            <div className="notifications">
                <div className="notificationsTop">
                    <h4>Notifications</h4> <i class="edit"></i>
                </div>
            </div>
            <div className="messages">
                <div className="messageTop">
                    <h4>Messages</h4> <i class="edit"></i>
                </div>
                <div className="messageSearchBar">
                    <i class="search"></i>
                    <input className="searchInput" type="search" placeholder="Search message" id="messageSearch"></input>
                </div>
                <div className="messageCategory">
                    <h6 className="active">Chat</h6>
                    <h6 className="messageRequest">Requests(2)</h6>
                </div>
                
            </div>
        </div>
    )
}