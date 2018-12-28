import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/Conferencia.css";
import YouTube from 'react-youtube';
import evento1 from '../img/agenda/evento1.png';

class Conferencia extends Component {
  render() {
    const opts = {
      height: '400',
      width: '399'
    }
    return (
      <div className="container-fluid ">
        <div className="after-box">
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
            <img className="card-img-top" src={evento1} style={{height:"400px"}}/>
          </div>

        </div>
      </div>
    );
  }
}

export default Conferencia;
