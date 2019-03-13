import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/Reviews.css";
import $ from 'jquery';
class ReviewTaller extends Component {
  constructor(props){
    super(props);
    this.state={
      comentario: "",
    };
  }
  review(e){
    var form = $("#frm2")
    e.preventDefault();
    var formData = new FormData(form[0]);
    formData.append("comentario", this.state.comentario);
    $.ajax({
            // url: 'http://localhost/cdmypephp/review.php',
            // url: 'https://cdmype.000webhostapp.com/review.php',
            url: 'http://backend.acdmype.org/review.php',
            data: formData,
            type: 'POST',
            contentType: false,
            processData: false,
            success: data => window.location.reload()
            // success: data => alert(data)
        });
  }
render() {
    return (
    <div className="container-fluid ">
    <h4>{this.props.titulo}</h4>
      <form id="frm2" onSubmit={this.review.bind(this)}>
        <p>Seleccione la cantidad de estrellas que le da:</p>
        <fieldset className="rating">
            <input type="radio" id="star5" name="rating" value="5" /><label className = "full" htmlFor="star5" title="Awesome - 5 stars"></label>
            <input type="radio" id="star4" name="rating" value="4" /><label className = "full" htmlFor="star4" title="Pretty good - 4 stars"></label>
            <input type="radio" id="star3" name="rating" value="3" /><label className = "full" htmlFor="star3" title="Meh - 3 stars"></label>
            <input type="radio" id="star2" name="rating" value="2" /><label className = "full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
            <input type="radio" id="star1" name="rating" value="1" /><label className = "full" htmlFor="star1" title="Sucks big time - 1 star"></label>
            <input type="radio" id="starhalf" name="rating" value="half" /><label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>
        </fieldset>
          <input name="idusuario" value={localStorage.getItem('id')} className="dato"/>
          <input name="idreviewactivo" value={this.props.idreviewactivo} className="dato"/>
          <label htmlFor="comment2">Comentarios:</label>
          <textarea className="form-control" rows="5" id="comment2" form="frm2" maxLength="150" name="" onChange={e=>this.setState({comentario: e.target.value})}></textarea>
        <br/>
        <br/>
        <br/>
        <br/>
        <button type="submit" className="btn btn-primary float-right" value="Enviar">Enviar</button>
      </form>
      <br/>
      <br/>
    </div>
    );
  }
}

export default ReviewTaller;
