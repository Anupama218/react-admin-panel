import './widget.css';
function Widget(){
   return (
    <div className="widget">
      <div className="widgetItem">
        <div className="widgetIcon">
          <i className="itemIcon fa-solid fa-circle-dollar-to-slot"  style={{color:"green", backgroundColor:"rgb(162, 202, 162)"}}></i>
        </div>
        <div className="widgetConatiner">
          <span className="widgetTitle">Earning</span>
          <span className="widgetMoney">$215k</span>
          <div className="Rate">
            <span className="WidgetMoneyRate">
             <i className="RateIcon fa-solid fa-arrow-down"></i>
             <span className='RateIcon'>3%</span>
            </span>
            
            <span className="WidgetSub">last month</span>
          </div>
        </div>
      </div>
      <div className="widgetItem">
        <div className="widgetIcon">
        <i className="itemIcon fa-regular fa-file-lines" style={{color:"purple", backgroundColor:"rgb(233, 206, 233)"}}></i>
        </div>
        <div className="widgetConatiner">
          <span className="widgetTitle">Orders</span>
          <span className="widgetMoney">$2.9k</span>
          <div className="Rate">
            <span className="WidgetMoneyRate">
              <i class="RateIcon fa-solid fa-arrow-up"></i>
              <span className='RateIcon'>3%</span>
            </span>
            
            <span className="WidgetSub">last month</span>
          </div>
        </div>
       </div>
      <div className="widgetItem">
        <div className="widgetIcon">
          <i className="itemIcon fa-solid fa-database" style={{color:"blue", backgroundColor:"rgb(177, 177, 225)"}}></i>
        </div>
        <div className="widgetConatiner">
          <span className="widgetTitle">Balance</span>
          <span className="widgetMoney">$2.4k</span>
          <div className="Rate">
            <span className="WidgetMoneyRate">
               <i class="RateIcon fa-solid fa-arrow-down"></i>
               <span className='RateIcon'>0.3%</span>
            </span>
            
            <span className="WidgetSub">last month</span>
          </div>
        </div>
       </div>
        
        <div className="widgetItem">
            <div className="widgetIcon">
              <i className="itemIcon fa-solid fa-chart-line" style={{color:"red"}}></i>
            </div>
            <div className="widgetConatiner">
                <span className="widgetTitle">Total Sell</span>
                <span className="WidgetMoney">$3,567</span>
                <div className="Rate">
                    <span className="WidgetMoneyRate">
                     <i class="RateIcon fa-solid fa-arrow-up"></i>
                     <span className='RateIcon'>2.5%</span>
                    </span>
                    
                    <span className="WidgetSub">last month</span>
                </div>
            </div>
        </div>
        </div>
        
    )
}
export default Widget;