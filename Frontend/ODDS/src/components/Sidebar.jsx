import React, { useState } from 'react';
import Logo from '../assets/Full-logo.png'
import {
    FaHome,
    FaBars,
    FaCamera,
    FaRoute,
    FaChartLine,
    FaDatabase,
    FaBook,
    FaUserFriends,
    FaPhoneAlt
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaHome />
        },
        {
            path: "/CameraStatus",
            name: "Camera Status",
            icon: <FaCamera />
        },
        {
            path: "/TrajectoryStudy",
            name: "Trajectory Study",
            icon: <FaRoute />
        },
        {
            path: "/DataVisualization",
            name: "Data Visualization",
            icon: <FaChartLine />
        },
        {
            path: "/PreviousData",
            name: "Previous Data",
            icon: <FaDatabase />
        },
        {
            path: "/Documentation",
            name: "Documentation",
            icon: <FaBook />
        },
        {
            path: "/AboutUs",
            name: "About Us",
            icon: <FaUserFriends />
        },
        {
            path: "/ContactUs",
            name: "Contact Us",
            icon: <FaPhoneAlt />
        }
    ]
    return (
        <div className="container">
            <div style={{ width: isOpen ? "300px" : "80px" }} className="sidebar">
                <div>
                    <div className="top_section">
                        <NavLink to={"/"} key={1} style={{ backgroundColor: '#FFF' }}><img src={Logo} alt="Full-logo" style={{ display: isOpen ? "block" : "none" }} className="logo" /></NavLink>
                        {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1> */}
                        <div style={{ marginLeft: isOpen ? "40px" : "8px" }} className="bars">
                            <FaBars onClick={toggle} />
                        </div>
                    </div>
                    <hr className='hr-bar' style={{ display: isOpen ? "block" : "none" }} />
                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link" >
                                <div className="icon">{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
                <div className="sidebarBottom">
                    <hr className='hr-bar2' style={{ display: isOpen ? "block" : "none" }} />
                    <NavLink to='/TermsAndConditions'><p className='bottom_text1' style={{ display: isOpen ? "block" : "none" }}>Terms and Conditions</p></NavLink>
                    <NavLink to='/PrivacyPolicy'><p className='bottom_text2' style={{ display: isOpen ? "block" : "none" }}>Privacy Policy</p></NavLink>
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;