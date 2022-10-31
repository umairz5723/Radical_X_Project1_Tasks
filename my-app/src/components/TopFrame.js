import React from "react";
import "../components/styles/Topframe.css";


function TopFrame(){
    return <div className="topmid">
        <div className="insights-box">
                    <div className="insights-box-title"> Internship Insights</div>
                     <div className="insights-box-description"> In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in which knowledge about space can be both a priori and synthetic.</div>
                 </div>
                
                <div className="top-right-side-container">
                <div className="filter-bar"> 
                      <button className="this-week"> <div className="this-week-text"> This week </div> </button>
                      <button className="this-month"><div className="this-month-text"> This month </div></button>
                       <button className="select-dates"><div className="select-dates-text"> Select dates </div></button>
                </div> 
                <div className="graph-div">
                    <div className="line-90"></div>
                    <div className="line-91"></div>
                    <div className="line-92"></div>
                 </div>
                </div>


        </div>
     
}

export default TopFrame;