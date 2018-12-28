import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/font-awesome/css/font-awesome.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';
import Home from './Home.js';
import Login from './components/Login.js';
import Conferencia from './components/Conferencia.js';
import Agenda from './components/Agenda.js';
import Perfil from './components/Perfil.js';
import Muro from './components/Muro.js';
import Registro from './components/RegistrarUsuario.js';
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
ReactDOM.render((
// <BrowserRouter>
// <div>
//   <Switch>
//     <Route exact path="/" component={Login} />
//     <Route path="/Home" component={Home}>
//
//     </Route>
//     <Route exact path="/Registro" component={Registro} />
//   </Switch>
// </div>
// </BrowserRouter>
<Conferencia/>
  ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
