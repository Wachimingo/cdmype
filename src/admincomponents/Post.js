import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/PostAdmin.css";
import $ from 'jquery';
class PostAdmin extends Component {
publicar(e){
  var form = $("#frm")
  e.preventDefault();
  var formData = new FormData(form[0]);
  $.ajax({
          url: 'http://backend.acdmype.org/publicar.php',
          data: formData,
          type: 'POST',
          contentType: false,
          processData: false,
          success: data => window.location.reload()
      });
}
onFileSelected(event) {
var selectedFile = event.target.files[0];
var reader = new FileReader();

var imgtag = document.getElementById("myimage");
imgtag.title = selectedFile.name;

reader.onload = function(event) {
  imgtag.src = event.target.result;
};

reader.readAsDataURL(selectedFile);
}
  render() {
    return (
    <div className="contenedor contaier-fluid">
      <form id="frm" method="POST" encType="multipart/form-data" onSubmit={this.publicar.bind(this)}>
        <label htmlFor="comment">Descripcion:</label>
        <textarea className="form-control texto" rows="5" id="comment" form="frm" maxLength="200" name="descripcion"></textarea>
        <br/>
        <div className="images">
          <label htmlFor="imgInp" className="btn btn-info">Agregar Fotos</label>
        </div>
        <input type="file" id="imgInp" name="foto" multiple onChange={this.onFileSelected.bind(this)} style={{display:"none"}}/>
        <img id="myimage" className="preview" height="100px" width="100px" alt=""/>
        <br/>
        <input type="text" defaultValue={localStorage.getItem('id')} name="idusuario" style={{display:"none"}}/>
        <br/>
        <button type="submit" className="btn btn-primary float-left" value="Upload File">Publicar</button>
      </form>
    </div>

    );
  }
}

export default PostAdmin;
