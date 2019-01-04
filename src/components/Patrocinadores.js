import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import Cartas from "./Cartas.js";
class Patrocinadores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patrocinadorOro: [
        {id: 1,ruta:'americanexpress.png', nombre:'American Express', industria:'Banca', descripcion:'Banco Multinacional'},
        {id:2,ruta:'ford.png', nombre:'Ford', industria:'Automotriz', descripcion:'Fabrica de carros'},
        {id:3,ruta:'ibm.png',nombre:'IBM', industria:'Electronica', descripcion:'Coporacion de soluciones tecnologicas'},
      ],
      patrocinadorPlata: [
        {id: 1,ruta:'americanexpress.png',},
        {id:2,ruta:'ford.png'},
        {id:3,ruta:'ibm.png'},
        {id:4,ruta:'sky.png'},
      ],
      patrocinadorBronce: [
        {id: 1,ruta:'americanexpress.png'},
        {id:2,ruta:'ford.png'},
        {id:3,ruta:'ibm.png'},
        {id:4,ruta:'sky.png'},
      ]
    }
  }

  render() {
    return (
      <div>
      <div className="cabezera"><h1 className="">Nuestros Patrocinadores</h1></div>

        <div className="oro"><h1 className="titulo">Patrocinadores de oro</h1>
        <div className="contenedor">
          {this.state.patrocinadorOro.map((item, i) =>
            <Cartas item={item} key={i} />
          )}
        </div>
      </div>
        <div className="plata"><h1 className="titulo">Patrocinadores de plata</h1>
        <div className="contenedor">
          {this.state.patrocinadorPlata.map((item, i) =>
            <Cartas item={item} key={i} />
          )}
        </div>
      </div>
      <div className="bronce"><h1 className="titulo">Patrocinadores de bronce</h1>
      <div className="contenedor">
        {this.state.patrocinadorBronce.map((item, i) =>
          <Cartas item={item} key={i} />
        )}
      </div>
      </div>
      </div>
    );
  }
}

export default Patrocinadores;
