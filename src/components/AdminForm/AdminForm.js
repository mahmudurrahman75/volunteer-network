import React, { useContext, useState } from 'react';
import './AdminForm.css';
import { Navbar } from 'react-bootstrap';
import Group1329 from '../../images/logos/Group 1329.png';
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AdminForm = () => {


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [adminData, setAdminData] = useState();

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        setAdminData(data)
        console.log(adminData);
    }



    // const handelAddRegister = () => {
    //     const newRegister = {...loggedInUser, ...adminData};
    //     fetch('http://localhost:5000/addRegister', {
    //         method: 'POST',
    //         headers: {'content-Type': 'application/json'},
    //         body: JSON.stringify(newRegister)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    // }




    return (
        <div className="admin">
            <div style={{display:"flex"}}>
                <Navbar.Brand className="logo" href="/home"><img src={Group1329} alt=""/></Navbar.Brand>
                <h5>Add Event</h5>
            </div>
            
            
            <form className="adminForm" onSubmit={handleSubmit(onSubmit)}>

                    <div className="insideField">
                        <div style={{display:"flex"}} className="title" >
                            <div>
                                <label for = "name">Event Title</label>
                                <input type="text" name="name" placeholder="Enter title"  ref={register}/>
                            </div>
                            <div className="date">
                                <label>Event Date</label>
                                <input type="date" name="date"  ref={register}/>
                            </div>
                            
                        </div>
                    
                        <div className="description">
                            <label>Description</label>
                            
                            <textarea rows= "3" class= "form-group" type="text" name="aboutYor" placeholder="Enter Designation"  ref={register}/>
                        </div>
                    </div>
                    


                    <div style={{display:"flex"}}>
                        <input  className="test" type="submit"  value="Submit"/>

                        <Link  to ="/home"><button className="go-event">Go Your Event</button></Link>
                    </div>
                    
                    
                    
                </form>

        </div>
    );
};

export default AdminForm;