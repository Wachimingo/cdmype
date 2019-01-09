import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/Perfil.css";
import $ from 'jquery';
class Perfil extends Component {
  constructor(props){
    super(props);
    this.state ={
      profile: [],

    }
  }
  componentDidMount(){
   fetch("http://localhost/cdmypephp/getprofile.php",{ mode:'cors'})
      .then(response => response.json())
      .then(data => this.setState({profile: data}));
  }
  render() {
    $(window).on('load',function(){
            document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Herbstlandschaft_%28am_Rebhang%29.jpg/800px-Herbstlandschaft_%28am_Rebhang%29.jpg')";
    });
    const {profile} =  this.state;
    return (
      <div className="container emp-profile r1">
      { profile.map((info,key) =>
        <form method="post">
            <div className="row">
                <div className="col-md-4">
                    <div className="profile-img">
                        <img src={"localhost/img/"+info.Cd_Uimg_profile} alt=""/>
                        <div className="file btn btn-lg btn-primary">
                            Change Photo
                            <input type="file" name="file"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="profile-head">
                                <h5>
                                    {info.Cd_UnameF + info.Cd_UlnameF }
                                </h5>
                                <h6>
                                {/*Mostrar el puesto que tiene la persona*/}
                                    {info.Cd_Upuesto}
                                </h6>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Acerca de: {info.Cd_UnameF}</a>
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
                <div className="col-md-4">

                <div className="col-md-8">
                    <div className="tab-content profile-tab" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                          <div className="row">
                              <div className="col-md-6">
                                  <label>Nombre</label>
                              </div>
                              <div className="col-md-6">
                                  <p>{info.Cd_UnameF +" "+ info.Cd_UnameS+" "+info.Cd_UlnameF+" "+info.Cd_UlnameS}</p>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-6">
                                  <label>Correo</label>
                              </div>
                              <div className="col-md-6">
                                  <p>{info.Cd_Umail}</p>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-6">
                                  <label>Telefono</label>
                              </div>
                              <div className="col-md-6">
                                  <p>{info.Cd_UnumTel}</p>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-6">
                                  <label>Puesto</label>
                              </div>
                              <div className="col-md-6">
                                  <p>{info.Cd_Upuesto}</p>
                              </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Experiencia</label>
                                </div>
                                <div className="col-md-6">
                                    <p>{info.Cd_Uexperiencia}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </form>
      )}
    </div>
  );
  }
}

export default Perfil;
