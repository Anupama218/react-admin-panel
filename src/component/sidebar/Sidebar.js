import './sidebar.css';
import DashboardIcon from "@mui/icons-material/Dashboard";
import profile from '../../img/pro.jpeg';

function Sidebar({openSidebarToggle, OpenSidebar}){
    return (
       <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
            <div className="top">
                <DashboardIcon className="icon" />
                <span className='SidebarTitle'>Dashboard</span>
                <span className='close_icon' onClick={OpenSidebar}>X</span>
                
            </div>
            <div className="center">
                <ul className='centerItem'>
                  <li className='listItem'>
                    <div className='listItemContainer'>
                      <i className="sidebarIcon fa-solid fa-warehouse"></i>
                      <span className='span'> Dashboard </span>
                      <i className="icon-r fa-solid fa-chevron-right"></i>
                    </div>
                  </li>
                  <li className='listItem'>
                    <div className='listItemContainer'>
                      <i className="sidebarIcon fa-solid fa-warehouse"></i>
                      <span className='span'> Product </span>
                      <i className="icon-r fa-solid fa-chevron-right"></i>
                    </div>
                  </li>
                  <li className='listItem'>
                    <div className='listItemContainer'>
                      <i className=" sidebarIcon fa-solid fa-user-group"></i>
                      <span className='span'> Customer </span>
                      <i className="icon-r fa-solid fa-chevron-right"></i>
                    </div>
                  </li>
                  <li className='listItem'>
                    <div className='listItemContainer'>
                      <i class=" sidebarIcon fa-solid fa-money-check-dollar"></i>
                      <span className='span'> Income </span>
                      <i className="icon-r fa-solid fa-chevron-right"></i>
                    </div>
                  </li>
                  <li className='listItem'>
                    <div className='listItemContainer'>
                      <i className="sidebarIcon fa-solid fa-atom"></i>
                      <span className='span'> Promote </span>
                      <i className="icon-r fa-solid fa-chevron-right"></i>
                    </div>
                  </li>
                  <li className='listItem'>
                    <div className='listItemContainer'>
                      <i className="sidebarIcon fa-regular fa-circle-question"></i>
                      <span className='span'> Help </span>
                      <i className="icon-r fa-solid fa-chevron-right"></i>
                    </div>
                  </li>
                  
                </ul>
            
            </div>
            <div className="bottom">
              <div className='bottomContainer'>
                <img className='profile' src = {profile} alt=""></img>
                <div className='user'>
                    <span className='user-n'>Ross</span>
                    <span className='user-d'>Product Manager</span>
                </div>
              </div>
            </div>
        
        </aside>
    )
}
export default Sidebar;