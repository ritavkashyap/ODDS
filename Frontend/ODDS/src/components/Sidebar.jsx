import React, { useState } from 'react';
import Logo from '../assets/Full-logo.png'
import {
    FaHome,
    FaBars,
    FaCamera,
    FaRoute,
    FaChartLine,
    FaBook,
    FaUserFriends,
    FaPhoneAlt
} from "react-icons/fa";
import { NavLink, RouterProvider } from 'react-router-dom';
import TermsAndConditions from '../pages/TermsAndConditions';
import PrivacyPolicy from '../pages/PrivacyPolicy';


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
                <div className="top_section">
                    <img src={Logo} alt="Full-logo" style={{ display: isOpen ? "block" : "none" }} className="logo" />
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
                <div className="bottom_section">
                    <hr className='hr-bar2' style={{ display: isOpen ? "block" : "none" }} />
                    <p className='bottom_text' style={{ display: isOpen ? "block" : "none" }}><a href="/TermsAndConditions" sty>Terms and Conditions</a></p>
                    <p className='bottom_text' style={{ display: isOpen ? "block" : "none" }}><a href="/PrivacyPolicy" >Privacy Policy</a></p>
                </div>
            </div>
            <main>{children}</main>
        </div>
    );

};


export default Sidebar;