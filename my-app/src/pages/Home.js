import React from "react";
import Sidebar from "../components/Sidebar";
import TopFrame from "../components/TopFrame";
import BottomFrame from "../components/BottomFrame";
import "../components/styles/Home.css";



function Home() {
    return <div className ="container">
    
        <div className="leftsection">
            <Sidebar />
        </div>

        <div className="middlesection">
                <TopFrame />      
                <BottomFrame />     
                
        </div>
           
    </div>
    
};


export default Home;