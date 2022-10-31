import React from "react";
import "./styles/Sidebar.css"
import {SidebarData} from "./SidebarData";

function Sidebar(){
    return <div >
    <img className="logo" src="https://i.ibb.co/yXZ2wDv/Radical-X-Logo.jpg" alt="RadicalX_Logo"/>
    <ul className="SidebarList">
        {SidebarData.map((val,key)=> {
            
             return <li 
             key={key} 
             className="row"
             onClick={()=> {window.location.pathname = val.link}}>
             {" "}
             <div>{val.icon}</div>
             <div className="title">{val.title}</div>
             </li>
            
        })}
        </ul>
    </div>
   
}

export default Sidebar;