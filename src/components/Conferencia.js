import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/Conferencia.css";
import "../css/Review.css";
import YouTube from 'react-youtube';
import evento1 from '../img/agenda/evento1.png';
import $ from 'jquery';
class Conferencia extends Component {
review={
  estrellas: '',
};
componentDidMount(){
  this.Refrescar();
}
Refrescar() {
  if(this.review.estrellas === ''){
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
          // do whatever you want with the checked radio
          //alert(radios[i].value);
          this.setState({review: radios[i].value });
          // only one radio can be logically checked, don't check the rest
          break;
      }
  }
  $('#review').modal('hide');
}
  render() {
    const opts = {
      height: '400',
      width: '399'
    }
    // $(window).on('load',function(){
    //     $('#livestreem').modal('show');
    // });

    return (
      <div className="container-fluid ">
      {/*This is a modal window, the first one will be for livestreem video from youtube for the conference, the second for the review*/}
      <div class="modal fade" id="livestreem" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Conferencia sobre: yara yara yara</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

            </div>
            <div class="modal-footer">

            </div>
          </div>
        </div>
      </div>
      {/*This is a modal window for the review*/}
      <div class="modal fade" id="review" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Nos importa tu opinion, por eso dinos que te ha parecido la conferencia</h5>
            </div>
            <div class="modal-body">
              <div class="row">
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
            <div class="modal-footer">

            </div>
          </div>
        </div>
      </div>
  {/*Inicio de la pagina*/}
        <div className="after-box encabezado">
          <div className="box1"><img src={evento1} className="banner" /></div>
            <div className="box2">
              <h1>Conferencia 1</h1>
              <p className="txtCuerpo">
                En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda. El resto della concluían sayo de velarte, calzas de velludo para las fiestas, con sus pantuflos de lo mesmo, y los días de entresemana se honraba con su vellorí de lo más fino.
              </p>
            </div>
        </div>
        <div className="Ponente">
            <div class="container">
                <div id="content1" className="row text-xs-center">
                    <div className="col-md-6">
                        <span  className="btn btn-primary ribbon">
                        <h3 className="txtTituloPonente">Ponente:</h3>
                        <h5 className="txtCuerpoPonente">Jose Perez</h5>
                        </span>
                        <img src={evento1} className="imgPonente" />
                    </div>
                </div>
            </div>
        </div>

        <div className="fondo">
          <div className="card carta1" >
            <YouTube
              videoId="MYVBgYquVCY"
              opts={opts}
            />
          </div>

          <div className="card carta2" >
            <iframe src="https://onedrive.live.com/embed?cid=039C20F0AE16508F&resid=39C20F0AE16508F%21662&authkey=AEESLZ3Jg1dlV2c&em=2" width="402" height="400" frameborder="0" scrolling="no"></iframe>
          </div>

          <div className="card carta3" >
            <img className="" src={evento1} style={{height:"400px"}}/>
          </div>

        </div>
      </div>
    );
  }
}

export default Conferencia;
