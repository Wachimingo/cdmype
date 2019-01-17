import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/Perfil.css";
import $ from 'jquery';
import img1 from "../img/imgperfil/perfil1.jpg";
class Perfil extends Component {
  constructor(props){
    super(props);
    this.state ={
      profile: [],

    }
  }
  // componentDidMount(){
  //  fetch("http://localhost/cdmypephp/getprofile.php",{ mode:'cors'})
  //     .then(response => response.json())
  //     .then(data => this.setState({profile: data}));
  // }
  render() {
    $(window).on('load',function(){
            document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Herbstlandschaft_%28am_Rebhang%29.jpg/800px-Herbstlandschaft_%28am_Rebhang%29.jpg')";
    });
    const {profile} =  this.state;
    return (
      <div className="container emp-profile r1">
        <form method="post">
            <div className="row">
                <div className="col-md-4">
                    <div className="profile-img">
                        <img src={img1} alt=""/>
                        <div className="file btn btn-lg btn-primary">
                            Change Photo
                            <input type="file" name="file"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="profile-head">
                                <h5>
                                    Joshua Herrea
                                </h5>
                                <h6>
                                {/*Mostrar el puesto que tiene la persona*/}
                                    Programador
                                </h6>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Acerca de: Joshua</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">CV</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-2">
                    <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                </div>
            </div>
            <div className="row">
            <div class="col-md-4">
                   <div class="profile-work">
                       <p>WORK LINK</p>
                       <a href="">Website Link</a><br/>
                       <a href="">Bootsnipp Profile</a><br/>
                       <a href="">Bootply Profile</a>
                       <p>SKILLS</p>
                       <a href="">Web Designer</a><br/>
                       <a href="">Web Developer</a><br/>
                       <a href="">WordPress</a><br/>
                       <a href="">WooCommerce</a><br/>
                       <a href="">PHP, .Net</a><br/>
                   </div>
               </div>
                <div className="col-md-8">
                    <div className="tab-content profile-tab" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                          <div className="row">
                              <div className="col-md-6">
                                  <label>Nombre</label>
                              </div>
                              <div className="col-md-6">
                                  <p>Joshua  Herrera </p>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-6">
                                  <label>Correo</label>
                              </div>
                              <div className="col-md-6">
                                  <p>joshuaguillen.adoc@live.com</p>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-6">
                                  <label>Telefono</label>
                              </div>
                              <div className="col-md-6">
                                  <p>7173-4144</p>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-6">
                                  <label>Puesto</label>
                              </div>
                              <div className="col-md-6">
                                  <p>Programador</p>
                              </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Experiencia</label>
                                </div>
                                <div className="col-md-6">
                                    <p>2 años</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
  );
  }
}

export default Perfil;
