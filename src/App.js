import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Event from './components/Event/Event';
import Admin from './components/Admin/Admin';
import AdminForm from './components/AdminForm/AdminForm';



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path = "/home">
            <Home></Home>
          </Route>
          <Route path = "/login">
            <Login></Login>
          </Route>
          <Route path = "/event">
            <Event></Event>
          </Route>
          <Route path = "/admin">
            <Admin></Admin>
          </Route>
          <Route path="/adminForm">
            <AdminForm></AdminForm>
          </Route>
          <PrivateRoute path = "/register">
            <Register></Register>
          </PrivateRoute>
          <Route exact path = "/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
