import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/SideBar.css";
import Agenda from"../components/Agenda.js";
import Perfil from"../components/Perfil.js";
import Muro from"../components/Muro.js";
import { BrowserRouter, Route, Switch, Redirect, Link} from 'react-router-dom';

class Nvbar extends Component {
  render() {
    var UpdateShow = this.props.UpdateShow;
    return (
      <div className="container-fluid ">
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark d">
          <a href="#sidebar" data-toggle="collapse"><i className="fa fa-navicon fa-lg  w "></i></a>
        <span onClick={this.props.Home} className="navbar-brand link Items" >CONAMYPE</span>
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
                  <div  onClick={this.props.Perfil}  className="list-group-item a collapsed link"  data-parent="#sidebar" ><i className="fa fa-user"></i> <span className="hidden-sm-down">Perfil    </span> </div>
                  <div  onClick={this.props.Agenda} className="list-group-item b collapsed link"   data-parent="#sidebar"><i className="fa fa-calendar-o"></i> <span className="hidden-sm-down">Programa</span></div>
              </div>
          </div>

      </div>

  </div>
    );
  }
}

export default Nvbar;
