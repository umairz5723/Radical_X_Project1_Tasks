import React from "react";
import "../components/styles/Bottomframe.css";
import {FaArrowCircleDown, FaChartBar, FaUserAlt,  } from 'react-icons/fa';
import {BsThreeDots} from  "react-icons/bs"

function BottomFrame(){
    return <div className="bottom-frame"> 
    <div className="internship-tab">
        
        <div className="internship-tab-title">Internships 
            <div style={{marginRight:"20px",}}><FaArrowCircleDown/></div>
        </div>
            
            <div className="internship-row">
                <div className="internship-row-title">Product Design GV
                <div className="internship-row-description">Amet minim mollit non deserunt est sit aliqua dolor do amet sint.</div>
                </div>   
            </div>

            <div className="internship-row">
                <div className="internship-row-title">Product Design GV
                <div className="internship-row-description">Amet minim mollit non deserunt est sit aliqua dolor do amet sint.</div>
                </div>   
            </div>

            <div className="internship-row">
                <div className="internship-row-title">Product Design GV
                <div className="internship-row-description">Amet minim mollit non deserunt est sit aliqua dolor do amet sint.</div>
                </div>   
            </div>

            <div className="internship-row">
                <div className="internship-row-title">Product Design GV
                <div className="internship-row-description">Amet minim mollit non deserunt est sit aliqua dolor do amet sint.</div>
                </div>   
            </div>

            <div className="internship-row">
                <div className="internship-row-title">Product Design GV
                <div className="internship-row-description">Amet minim mollit non deserunt est sit aliqua dolor do amet sint.</div>
                </div>   
            </div>
     </div>
    
    <div className="completion-tab">
        
        <div className="completion-tab-title">Completion Period 
            <div style={{marginRight:"20px",}}><FaArrowCircleDown/></div>
        </div>
            
            <div className="completion-tab-row">
                <div className="completion-tab-row-date"> 120 days
                <div className="completion-tab-row-created">(created on 10/12/2021)</div>
                </div>
             </div>

             <div className="completion-tab-row">
                <div className="completion-tab-row-date"> 120 days
                <div className="completion-tab-row-created">(created on 10/12/2021)</div>
                </div>
             </div>

             <div className="completion-tab-row">
                <div className="completion-tab-row-date"> 120 days
                <div className="completion-tab-row-created">(created on 10/12/2021)</div>
                </div>
             </div>

             <div className="completion-tab-row">
                <div className="completion-tab-row-date"> 120 days
                <div className="completion-tab-row-created">(created on 10/12/2021)</div>
                </div>
             </div>

             <div className="completion-tab-row">
                <div className="completion-tab-row-date"> 120 days
                <div className="completion-tab-row-created">(created on 10/12/2021)</div>
                </div>
             </div>

     </div>
    
    <div className="total-enrolled-tab">
        <div className="total-enrolled-title"> Total Enrolled
            <div style={{marginRight:"20px",}}><FaArrowCircleDown/></div>
        </div>
        
        <div className="total-enrolled-row">
            <div className="total-enrolled-row-content"> 20,000</div>
        </div>
        <div className="total-enrolled-row">
            <div className="total-enrolled-row-content"> 20,000</div>
        </div>
        <div className="total-enrolled-row">
            <div className="total-enrolled-row-content"> 20,000</div>
        </div>
        <div className="total-enrolled-row">
            <div className="total-enrolled-row-content"> 20,000</div>
        </div>
        <div className="total-enrolled-row">
            <div className="total-enrolled-row-content"> 20,000</div>
        </div>
     </div>
   
    <div className="qualified-tab">
        <div className="qualified-tab-title">Qualified Candidates 
            <div style={{marginRight:"20px",}}><FaArrowCircleDown/></div>
        </div>
        <div className="qualified-tab-row">
            <div className="qualified-tab-row-content"> Graph area </div>
        </div>
        <div className="qualified-tab-row">
            <div className="qualified-tab-row-content"> Graph area </div>
        </div>
        <div className="qualified-tab-row">
            <div className="qualified-tab-row-content"> Graph area </div>
        </div>
        <div className="qualified-tab-row">
            <div className="qualified-tab-row-content"> Graph area </div>
        </div>
        <div className="qualified-tab-row">
            <div className="qualified-tab-row-content"> Graph area </div>
        </div>
    </div>
    
    <div className="charts-tab">
        <div className="charts-tab-title"></div>
        
        <div className="charts-tab-row">
            <div className="charts-tab-row-content"> <FaChartBar/> <FaUserAlt/><BsThreeDots/> </div>
        </div>
        <div className="charts-tab-row">
            <div className="charts-tab-row-content"> <FaChartBar/> <FaUserAlt/><BsThreeDots/> </div>
        </div>
        <div className="charts-tab-row">
            <div className="charts-tab-row-content"> <FaChartBar/> <FaUserAlt/><BsThreeDots/> </div>
        </div>
        <div className="charts-tab-row">
            <div className="charts-tab-row-content"> <FaChartBar/> <FaUserAlt/><BsThreeDots/> </div>
        </div>
        <div className="charts-tab-row">
            <div className="charts-tab-row-content"> <FaChartBar/> <FaUserAlt/><BsThreeDots/> </div>
        </div>

    </div>
    
    </div>
};

export default BottomFrame;