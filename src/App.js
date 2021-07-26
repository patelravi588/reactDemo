import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import NavbarMenu from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/pages/NotFouns';
import AddUser from './components/pages/users/AddUser';
import EditUser from './components/pages/users/EditUser';
import ViewUser from './components/pages/users/ViewUser';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarMenu />
        <Switch>
          <Route exact path="/" component = {Home}></Route>
          <Route exact path = "/aboutus" component = {About}></Route>
          <Route exact path = "/contactus" component = {Contact}></Route>
          <Route exact path = "/users/add" component ={AddUser}></Route>
          <Route exact path = "/users/edit/:id" component ={EditUser}></Route>
          <Route exact path = "/users/view/:id" component = {ViewUser}></Route>
          <Route component = {NotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
