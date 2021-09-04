import React from 'react';
import { AiOutlineFileAdd } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { HiViewGridAdd } from "react-icons/hi";
import { Link } from 'react-router-dom';
import logo from './../../Images/logo.PNG';

const Sidebar = ({ show }) => {
    return (
        <nav id="sidebar" className={show ? "active" : ""}>
            <div className="sidebar-header">
            <h1
        className="d-inline-block align-top"
        style={{ fontSize: "1.8rem", fontWeight: "bold" }}> 
        <img style={{width:'35px'}} src={logo} alt=""/>
        BaBa<span className="dot">.com</span>
     </h1>
            </div>
            <ul className="list-unstyled components">
                <li>
                    <Link className="sidebar-text" to="/panel/manageProduct">
                        <HiViewGridAdd style={{ fontSize: "1.4rem" }} />
                         <span > Manage Product</span> 
                    </Link>
                </li>
                <li>
                    <Link className="sidebar-text" to="/panel/addProduct">
                        <AiOutlineFileAdd style={{ fontSize: "1.3rem" }} />
                         <span >Add Product</span> 
                    </Link>
                </li>
                <li>
                    <Link className="sidebar-text" to="/panel/editProduct">
                        <FiEdit style={{ fontSize: "1.2rem" }} /> 
                        <span > Edit Product </span> 
                    </Link>
                </li>
            </ul>
            <ul className="list-unstyled CTAs">
                <li>
                    <Link to="/" className="download">Back to Home</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;