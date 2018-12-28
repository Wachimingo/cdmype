import React, { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "./css/SideBar.css";
import Agenda from"./components/Agenda.js";
import Perfil from"./components/Perfil.js";
import Muro from"./components/Muro.js";
import Nvbar from"./components/Nvbar.js";
import createHistory from 'history/createBrowserHistory'

import { BrowserRouter, Route, Switch, Redirect, Link} from 'react-router-dom';
import "./js/MuroFuncion.js";

class Home extends Component {

  render() {

    return (
    <div className="container-fluid ">

    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark d">
        <a href="#sidebar" data-toggle="collapse"><i className="fa fa-navicon fa-lg  w "></i></a>
      <Link to={'/Home'} className="navbar-brand link Items" >CONAMYPE</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
    <a href="#" className="nav-link" href="#">{this.props.Palabra} <span className="sr-only">(current)</span></a>
    </li>

    </ul>
    </div>
    </nav>

    <div className="row">
        <div className="col-md-3 col-xs-1 p-l-0 p-r-0 collapse in " id="sidebar">
            <div className="list-group outer panel">
                <Link to={'/Home/Perfil'} className="list-group-item a collapsed "  data-parent="#sidebar" ><i className="fa fa-user"></i> <span className="hidden-sm-down">Perfil</span> </Link>
                <Link to={'/Home/Agenda'} className="list-group-item b collapsed"   data-parent="#sidebar"><i className="fa fa-calendar-o"></i> <span className="hidden-sm-down">Programa</span></Link>
            </div>
       </div>
    </div>
    <Switch>
      <Route exact path="/Home" component={Muro} />
      <Route path="/Home/Perfil" component={Perfil} />
      <Route path="/Home/Agenda" component={Agenda} />
    </Switch>
</div>
    );
  }
}

export default Home;
