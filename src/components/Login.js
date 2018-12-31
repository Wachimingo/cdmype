import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/login.css";
import '../../node_modules/history/umd/history.js';
import { Link} from 'react-router-dom';
class Login extends Component {

  onSignIn(event) {
    event.preventDefault();
    this.props.history.push('/Home')
  }
  render() {

    return (
<div className = "bg">
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>Sign In</h3>
              <div className="d-flex justify-content-end social_icon">
                <span><i className="fa fa-facebook-square"></i></span>
                <span><i className="fa  fa-google-plus-square"></i></span>

              </div>
            </div>
            <div className="card-body">
              <form onSubmit={this.onSignIn.bind(this)}>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-user-md"></i></span>
                  </div>
                  <input type="text" className="form-control" placeholder="Nombre de usuario"/>
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-lock"></i></span>
                  </div>
                  <input type="password" className="form-control" placeholder="Contraseña"/>
                </div>
                <div className="row align-items-center remember">
                  <input type="checkbox"/>Recuerdame
                </div>
                <div className="form-group">
                  <input type="submit" value="Login" className="btn float-right login_btn"/>
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                No tienes cuenta??<Link to="/Registro" className="link">Registrate</Link>
              </div>
              <div className="d-flex justify-content-center">
                <Link to="/Recuperar" className="link">Has olvidado tu contraseña?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
    );
  }
}

export default Login;
