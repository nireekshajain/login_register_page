export default function NavBar() {
    return (<nav className ="nav">
        {/* <img src="login_register_page\src\images\AIMS-logo.svg" width="60px" height="40px" style="margin-left: 10px;" /> */}
        <a href ="https://apps.accolite.com/cob/#/mycards" className = "site-title">AIMS</a>
        <ul>
            <li>
                <a href ="/homePage"> Home Page</a>
            </li>
            <li>
                <a href ="/AdminEmployeeList"> Employee List</a>
            </li>
            <li>
                <a href ="/AdminLocation"> Locations</a>
            </li>    
            <li>
                <a href ="/Profile"> Profile</a>
            </li>
        </ul>
    </nav>)
}