import React, { useContext, useState } from 'react';
import './Register.css';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Group1329 from '../../images/logos/Group 1329.png';
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';


const Register = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [registerData, setRegisterData] = useState();

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        setRegisterData(data)
        console.log(registerData);
    }



    const handelRegister = () => {
        const newRegister = {...loggedInUser, ...registerData};
        fetch('http://localhost:5000/addRegister', {
            method: 'POST',
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify(newRegister)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }



    return (
        <div>
            <a style={{marginLeft: "550px", marginTop: "50px"}} className="logo"  href="/home"><img  src={Group1329} alt=""/></a>
            <div>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <h3>Register as a Volunteer</h3>
                    <div>
                        <input type="text" name="name" placeholder="full name" value={loggedInUser.name}  ref={register}/>
                    </div>
                   
                    <div>
                        <input type="text" name="email" placeholder="email" value={loggedInUser.email}  ref={register}/>
                    </div>

                    <div>
                        <input type="date" name="date"  ref={register}/>
                    </div>

                    <div>   
                        <input type="text" placeholder="Description" name="Description"  ref={register}/>
                    </div>
                    <div>   
                        <input type="text" placeholder="Organize books in the library" name="OrganizeLibrary" ref={register}/>
                    </div>
                    
                    <input  className="test" type="submit"  value="Registration"/>

                    <Link  to ="/event"><button onClick={handelRegister} className="go-btn">Go Your Event</button></Link>
                    
                </form>
            </div>
        </div>
    );
};

export default Register;