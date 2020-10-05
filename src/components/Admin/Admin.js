import React from 'react';
import { Navbar } from 'react-bootstrap';
import Data from '../Data/Data';
import Group1329 from '../../images/logos/Group 1329.png';
import './Admin.css';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div className="admin">
            <div style={{display:"flex"}}>
            <Navbar.Brand className="logo" href="/home"><img src={Group1329} alt=""/></Navbar.Brand>
            <h3>Volunteer register list</h3>
            </div>
            <div className="col-md-1">
                <Link  to ="/adminForm"><button>+Add event</button></Link>
            </div>
            <div className="adminData">
                <Data></Data>
            </div>
            
        </div>
    );
};

export default Admin;