import './header.css';
function Header({OpenSidebar}){
    return (
        <div className="header">
            <div className='menu-icon'>
               <i class="fa-solid fa-bars" onClick={OpenSidebar} style={{color:'black', fontWeight:700}}></i>
            </div>
            <div className='wrap'>
                <div className="nav-item">
                    <span className='user-h'>Hello Anupama</span>
                    <i className="nav-i fa-solid fa-hand"></i>
                </div>
                <div className='search'>
                <i className=" search-i fa-solid fa-magnifying-glass"></i>
                    <input type="text" className="search-h" placeholder="search"></input>
                </div>
            </div>
        </div>
    )
}
export default Header;