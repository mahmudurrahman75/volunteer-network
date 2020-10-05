import React, { useContext, useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';
import Group1329 from '../../images/logos/Group 1329.png';
import extraVolunteer from '../../images/photos/extraVolunteer.png';
import './Event.css';

const Event = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [eventData, setEventData] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/registers?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setEventData(data));
    }, [])


    return (
        <div>
            <Navbar bg="" variant="light">
                <Navbar.Brand className="logo" href="/home"><img src={Group1329} alt=""/></Navbar.Brand>
                <Nav className="mr-auto event">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="#features">Donation</Nav.Link>
                    <Nav.Link href="#pricing">Events</Nav.Link>
                    <Nav.Link href="#pricing">Blog</Nav.Link>
                    <p>{loggedInUser.name}</p>
                </Nav>
            </Navbar>

            <div className="row">
                {/* <h3 style={{textAlign:"center", margin:"30px"}}>The Registered quantity: {data.length}</h3> */}
            
                {
                    eventData.map(pd => 
                    

                        <div >

                            <div  className="personalEvent">

                                <div style={{display:"flex"}} className="dataField">
                                    
                                    <img src={extraVolunteer} alt=""/>

                                    <h5>{pd.OrganizeLibrary}</h5>
                                    
                                    <p>{pd.date}</p>
                                    
                                </div>

                            </div>
                            
                        </div>
                        
                    )
                }
        </div>
            

        </div>
    );
};

export default Event;