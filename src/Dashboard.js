import React from 'react'
import toggle from "./assets/toggle.png"
import mainlogo from "./assets/mainlogo.png"
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
    const navigate = useNavigate();

    const search = ()=>{
        navigate('/profile')
    }
    return (
        <div>
            <div className="container">
                <div className="navbar">
                    <img onClick={search} src={toggle} alt="" />
                </div>

                <div className="mainlogo">
                    <center> <img  src={mainlogo} alt="" /></center>
                </div>
                <div>
                    <br />
                    <center><p className='head1'>Employee Productivity Dashboard</p></center>
                </div>
                <center>
                <div className="productivity">
            <div className="each">
                <p>Productivity on Monday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4%</p>
                
                <div className="load1"></div>
            </div>
            <div className="each">
                <p>Productivity on Tuesday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 92%</p>
                
                <div className="load2"></div>
            </div>
            <div className="each">
                <p>Productivity on Wednesday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 122%</p>
                <div className="load3"></div>
            </div>
            <div className="each">
                <p>Productivity on Thursday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 93%</p>
                <div className="load4"></div>
            </div>
            <div className="each">
                <p>Productivity on Friday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 89%</p>
                <div className="load5"></div>
            </div>
            <div className="each">
                <p>Productivity on Saturday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 98%</p>
                <div className="load6"></div>
            </div>
            </div>
                </center>
            </div>
        </div>
    )
}

export default Dashboard
