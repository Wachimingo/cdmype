import React, { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import Menu from "./admincomponents/Menu.js";
import Asistencia from"./admincomponents/Asistencia.js";
import PostAdmin from"./admincomponents/Post.js";
import ActivarReview from"./admincomponents/ActivarReview.js";
import Imprimir from"./admincomponents/ImprimirAsistencia.js";
import {Route, Switch, Link} from 'react-router-dom';
// import $ from 'jquery';

class AdminHome extends Component {
  constructor(props){
    super(props);
    this.state = {
      reloaded: false,
    };
  }
/*Funcion para cerrar sesion*/
 cerrarSesion(e){
   localStorage.clear();
   this.props.history.replace('/');
 }
 componentWillMount(){
   document.body.style.overflow = 'auto';
 }
  render() {
    return (
      <div className="container-fluid ">
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark barra">
              <Link to={'/Admin'} className="navbar-brand Items">V CONGRESO</Link>
              <button type="button" className="cerrar" onClick={this.cerrarSesion.bind(this)}><i className="fa fa-power-off"/> Cerrar Sesion</button>
          </nav>
{/*Este es el enrutador, toma las rutas del navegador y renderiza el componente de la barra de navegacion y un componene hijo*/}
          <Switch>
            <Route exact path="/Admin" component={Menu}/>
            <Route exact path="/Admin/Asistencia" component={Asistencia}/>
            <Route exact path="/Admin/Post" component={PostAdmin}/>
            <Route exact path="/Admin/ActivarReview" component={ActivarReview}/>
            <Route exact path="/Admin/ImprimirAsistencia" component={Imprimir}/>
          </Switch>
      </div>
    );
  }
}

export default AdminHome;
