import React, { lazy, Suspense, useState, useEffect }  from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Login from "../../Components/Admin/Login/Login";
import  CustomerLogin  from "../../Components/Customer/Login/Login";
import Customers from "../../Components/Admin/Customers/Customers";
import CustomerNotification from "../../Components/Admin/CustomerNotification/CustomerNotification";
import Profile from "../../Components/Customer/Profile/Profile";


import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from "../../features/Auth/adminSlice";
import { setCustomerLogout } from "../../features/Auth/userSlice";

export default function Menubar(props) {
    //const navigate = useNavigate();
    const adminDetail = useSelector((c) => c.admin);
    const customerDetail = useSelector((c) => c.customer);
    const dispatch = useDispatch();
    const handleAdminLogout = () => {
        dispatch(setLogout());
       // navigate("/");
        window.location.href = "/";
    }
    const handleCustomerLogout = () => {
        dispatch(setCustomerLogout());
        // navigate("/");
        window.location.href = "/";
    }
    return (
        <Router>
        <nav className="navbar  bg-secondary navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img
                        src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"

                        width="30"
                        height="30"
                        alt=""
                    />
                </a>
                    <ul className="list-group list-group-horizontal-lg">
                        {!adminDetail.isLoggedIn  && 
                            <li className="list-group-item"><Link className="nav-link" to="/admin-login">Admin Login</Link></li>
                        }    
                        { !customerDetail.isLoggedIn &&             
                        <li className="list-group-item"><Link className="nav-link"  to="/customer-login">Customer Login</Link></li>
                        
                        }
                        <li className="list-group-item">Contact us</li>
                        {customerDetail.isLoggedIn &&  
                            <li className="list-group-item" onClick={() => handleCustomerLogout()}>Logout</li>
                        }
                        {adminDetail.isLoggedIn &&
                            <li className="list-group-item" onClick={() => handleAdminLogout()}>Logout</li>
                        }
                        
                </ul>
            </div>
        </nav>
        <Routes>
            <Route path="/admin-login" element={<Login />}/>
                <Route path="admin">
                    <Route path="customers" element={<Customers />} />
                    <Route path="customer/:id/notifications" element={<CustomerNotification />} />
                </Route>
            <Route path="/customer-login" element={<CustomerLogin/>} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/notifications" element={<CustomerLogin />} />
                
        </Routes>
        </Router>

    );
}

