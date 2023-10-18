import Sidebar from '../../component/sidebar/Sidebar';
import Header from '../../component/header/Header';
import List from '../../component/productList/List'
import Chart from '../../component/chart/Chart';
import CircularBar from '../../component/circularbar/CircularBar';
import Widget from '../../component/widget/Widget';
import Dropdown from '../../component/dropdown/Dropdown';
import './home.css';
import { useState } from 'react';
function Home(){
    const options = [
        { value: 'option1', label: 'Last 30 days' },
        { value: 'option2', label: 'Last 6 month' },
        { value: 'option3', label: 'Last 1 year' },
      ];

      const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
    

      const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

    return (
        <div className='container'>
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            
            <div className='wrapper'>
                <Header OpenSidebar={OpenSidebar}/>
                <div className="widgets">
                    <Widget/>
                </div>
                <div className='graph'>
                    <Chart/>
                    <CircularBar/>
                </div>
                <div className='productList'>
                    <div className='listTitle'>
                        <span className='p-title'>Product Sell</span>
                        <div className='right'>
                            <div className='search-l'>
                                <i className=" search-i fa-solid fa-magnifying-glass"></i>
                                <input type="text" className="search-h" placeholder="search"></input>
                            </div>
                            <Dropdown options={options}/>
                        </div>
                        </div>
                    <List/>
                </div>
                
            </div>
            
        </div>
    )
}
export default Home;