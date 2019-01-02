import React, { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "./css/SideBar.css";
import Agenda from"./components/Agenda.js";
import Perfil from"./components/Perfil.js";
import Muro from"./components/Muro.js";
import Conferencia from"./components/Conferencia.js";
<<<<<<< HEAD
import Patrocinadores from"./components/Patrocinadores.js";
=======
>>>>>>> e2e7ba9af33173bfae5e7656c25e46ad7c6a21f8
import {Route, Switch, Link} from 'react-router-dom';
import "./js/MuroFuncion.js";
import $ from 'jquery';

class Home extends Component {

  render() {
    return (
    <div className="container-fluid ">

    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark d">
        <a href="#sidebar" data-toggle="collapse"><i className="fa fa-navicon fa-lg  w "></i></a>
      <Link to={'/Home'} className="navbar-brand link Items" >CONAMYPE</Link>
      <span className="fa fa-arrow-up arrow">__Subir fotos</span>

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
                <Link to={'/Home/Patrocinadores'} className="list-group-item c collapsed"   data-parent="#sidebar"><i className="fa fa-gift"></i> <span className="hidden-sm-down">Patrocinadores</span></Link>
            </div>
       </div>
    </div>
    <Switch>
      <Route exact path="/Home" component={Muro} />
      <Route path="/Home/Perfil" component={Perfil} />
      <Route path="/Home/Agenda" component={Agenda} />
      <Route path="/Home/Patrocinadores" component={Patrocinadores} />
      <Route exact path="/Home/Conferencia" component={Conferencia}/>
    </Switch>
</div>
    );
  }
}

export default Home;
