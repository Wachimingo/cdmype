import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/ModalWindowPost.css";
import $ from 'jquery';
class Post extends Component {

  render() {
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
      var form = $("#frm")
    // Listen for form submit
    form.submit(function(e) {
        e.preventDefault();
        var formData = new FormData(form[0]);
        const files = document.querySelector('[type=file]').files;
        for (let i = 0; i < files.length; i++) {
          let file = files[i];
          formData.append('files[]', file);
        }
        formData.append("descripcion", "esta es una descripcion");
        $.ajax({
                url: 'http://localhost/cdmypephp/process.php',
                data: formData,
                type: 'POST',
                contentType: false,
                processData: false,
                success: function(d) {
                    alert(d);
                }
            });
    });
}
    return (
    <div className="container-fluid ">
      <form id="frm" method="POST" encType="multipart/form-data">
        <label htmlFor="comment">Descripcion:</label>
        <textarea className="form-control" rows="5" id="comment" form="frm" maxLength="200"></textarea>
        <div className="images">
          <label htmlFor="pro-image" className="btn btn-info">Agregar Fotos</label>
        </div>
        <input type="file" id="pro-image" name="Files[]"  className="form-control" multiple  style={{display:"none"}}/>
          <div className="preview-images-zone">

          </div>
          <button type="submit" className="btn btn-primary float-left" value="Upload File">Publicar</button>
      </form>
    </div>

    );
  }
}

export default Post;
