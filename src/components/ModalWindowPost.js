import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/ModalWindowPost.css";
import $ from 'jquery';
class Post extends Component {

  render() {
    var event = 1;
    $(document).ready(function() {
        document.getElementById('pro-image').addEventListener('change', readImage, false);
        $(document).on('click', '.image-cancel', function() {
            let no = $(this).data('no');
            $(".preview-image.preview-show-"+no).remove();
        });
    });
    var num = 4;
    function readImage() {
        if (window.File && window.FileList && window.FileReader) {
            var files = window.event.target.files; //FileList object
            var output = $(".preview-images-zone");

            for (let i = 0; i < files.length; i++) {
                var file = files[i];
                if (!file.type.match('image')) continue;

                var picReader = new FileReader();

                picReader.addEventListener('load', function (event) {
                    var picFile = event.target;
                    var html =  '<div class="preview-image preview-show-' + num + '">' +
                                '<div class="image-cancel" data-no="' + num + '">x</div>' +
                                '<div class="image-zone"><img id="pro-img-' + num + '" src="' + picFile.result + '" height="100"></div>' +
                                '<div class="tools-edit-image"><a href="javascript:void(0)" data-no="' + num + '" class="btn btn-light btn-edit-image">edit</a></div>' +
                                '</div>';

                    output.append(html);
                    num = num + 1;
                });

                picReader.readAsDataURL(file);
            }
            $("#pro-image").val('');
        } else {
            console.log('Browser not support');
        }
    }
    window.onload=function(){
      const url = './php/process.php';
      const form = document.getElementById('frm');

    // Listen for form submit
    form.addEventListener('submit', e => {
        e.preventDefault();
        const files = document.querySelector('[type=file]').files;
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
          let file = files[i];
          formData.append('files[]', file);
        }
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(response => {
            console.log(response);
        });
    });
}
    return (
    <div className="container-fluid ">
      <form id="frm">
        <label htmlFor="comment">Descripcion:</label>
        <textarea className="form-control" rows="5" id="comment"></textarea>
        <div className="images">
          <label htmlFor="pro-image" className="btn btn-info">Agregar Fotos</label>
        </div>
        <input type="file" id="pro-image" name="files[]"  className="form-control" multiple style={{display:"none"}}/>
          <div className="preview-images-zone">

          </div>
          <button type="submit" className="btn btn-primary float-left">Publicar</button>
      </form>
    </div>

    );
  }
}

export default Post;
