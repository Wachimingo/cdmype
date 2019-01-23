import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/Conferencia.css";
import "../css/Review.css";
import YouTube from 'react-youtube';
import $ from 'jquery';
class Conferencia extends Component {
state={
  estrellas: '',
  conferencia: [],
};
Refrescar() {
  if(this.state.estrellas === ''){
      $('#review').modal({
          backdrop: 'static',
          keyboard: false
      });}
  }
onReview(event) {
  event.preventDefault();
  var radios = document.getElementsByName('rating');
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
          this.setState({review: radios[i].value });
          break;
      }
  }
  $('#review').modal('hide');
}

  componentDidMount(){
    this.Refrescar();
    let id = this.props.match.params.id;
    fetch("http://localhost/cdmypephp/getconferencia.php?id="+id, {mode: 'cors'})
    .then(response => response.json())
    .then(data => this.setState({conferencia: data}));
  }
  render() {
    const opts = {
      height: '400',
      width: '399'
    }
    function importAll(r) {
      let ponentesFoto = {};
      r.keys().map((item, index) => {return ponentesFoto[item.replace('./', '')] = r(item); });
      return ponentesFoto;
    }
    const ponentesFoto = importAll(require.context('../img/ponentes', false, /\.(png|jpe?g|svg)$/));
    return (
      <div className="container-fluid ">
      {/*This is a modal window for the review*/}
      <div className="modal fade" id="review" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Nos importa tu opinion, por eso dinos que te ha parecido la conferencia</h5>
            </div>
            <div className="modal-body">
              <div className="row">
                <form id="formReview" onSubmit={this.onReview.bind(this)}>
                {/*It shows a row of stars, y you want to add more, change the group of radio buttons*/}
                <p>Que le parecio el tema?</p>
                	<div class="rating">
                      <input type="radio" id="star10" name="rating" value="10" /><label for="star10" title="Rocks!">5 stars</label>
                      <input type="radio" id="star9" name="rating" value="9" /><label for="star9" title="Rocks!">4 stars</label>
                      <input type="radio" id="star8" name="rating" value="8" /><label for="star8" title="Pretty good">3 stars</label>
                      <input type="radio" id="star7" name="rating" value="7" /><label for="star7" title="Pretty good">2 stars</label>
                      <input type="radio" id="star6" name="rating" value="6" /><label for="star6" title="Meh">1 star</label>
                      <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="Meh">5 stars</label>
                      <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="Kinda bad">4 stars</label>
                      <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="Kinda bad">3 stars</label>
                      <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="Sucks big tim">2 stars</label>
                      <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="Sucks big time">1 star</label>
                  </div>
                  <input type="submit" className="btn btn-success float-right" value="aceptar"/>
                </form>
              </div>
            </div>
            <div className="modal-footer">

            </div>
          </div>
        </div>
      </div>
  {/*Inicio de la pagina*/}
        <div className="after-box encabezado">
          <div className="box1"><img src={ponentesFoto[this.state.conferencia['foto']]} className="banner" alt="evento"/></div>
            <div className="box2">
              <h1>{this.state.conferencia['contenido']} 1</h1>
              <p className="txtCuerpo">

              </p>
            </div>
        </div>
        <div className="Ponente">
            <div class="container">
                <div id="content1" className="row text-xs-center">
                    <div className="col-md-6">
                        <span  className="btn btn-primary ribbon">
                        <h3 className="txtTituloPonente">Ponente:</h3>
                        <h5 className="txtCuerpoPonente">{this.state.conferencia['nombreponente']}</h5>
                        </span>
                        <img src={ponentesFoto[this.state.conferencia['foto']]} className="imgPonente" alt="ponente"/>
                    </div>
                </div>
            </div>
        </div>

        <div className="fondo">
          <div className="card carta1" >
            <YouTube
              videoId={this.state.conferencia['enlacevideo']}
              opts={opts}
            />
          </div>

          <div className="card carta2" >
            <iframe src={this.state.conferencia['enlacepowerpoint']} width="402" height="400" frameborder="0" scrolling="no" title="video"></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Conferencia;
