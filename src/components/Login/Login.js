import React, { useContext } from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import firebaseConfig from './firebase.config';
import Group1329 from '../../images/logos/Group 1329.png';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleLogIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            
            
            
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
            console.log(loggedInUser);
            history.replace(from);
            
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
          });
    }

    return (

        <div>
            <a style={{marginLeft: "550px", marginTop: "50px"}} className="logo"  href="/home"><img  src={Group1329} alt=""/></a>
            <div className="login">
            <h3>Login With</h3>
            <button className="google" onClick={handleGoogleLogIn}>Google LogIn</button>
            <h6>Don't have an account? <a href="/login">Create an account</a></h6>
            </div>
        </div>
    );
};

export default Login;