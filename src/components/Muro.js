import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/Muro.css";
import "../js/MuroFuncion.js";
import img1 from "../img/agenda/evento1.png";
import img2 from "../img/agenda/evento2.png";
class Muro extends Component {
  render() {
    return (
    <div className="container-fluid ">
    <section>
      <div class= 'insta fade-scroll'>
        <div class='top-insta'>
          <a href='' target='_blank'><img src={img1}/></a>
          <a href='' target='_blank' class='user'>Alexander</a>
          <span class= 'dot'></span>
        </div>
        <div class='post'>
            <div class="overlay">
            <span></span>
            </div>
          <img src={img2} />
     </div>
        <div class='footer'>

          <div class='react'>
            <a href='#' role='button'><span class='love'></span></a>
            <a href='#' role='button'><span class='comment'></span></a>
            <a href='#' role='button'><span class='save'></span></a>

          </div>

          <div class='caption'>
            <a href='#'>uncle_oreo</a><span>Done Safe and Sound</span>
          </div>

          <div class='comment-section'>
            <input type='text' id='cmnt' placeholder='Add a comment...'/>
            <span class='dot02'></span>
          </div>

        </div>

      </div>
    </section>
    </div>

    );
  }
}

export default Muro;
