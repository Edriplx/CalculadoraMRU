//instalar el boostrap y el delete row para el correcto uso del programa
//npm install react-bootstrap bootstrap
//npm install react-delete-row
//npm install react-icons
import React, { useState } from 'react';
import ReactDeleteRow from 'react-delete-row';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'; 
class Calculadora extends React.Component {
  state = {
    list: [],
    id: '',
    distancia: '',
    tiempo: '',
    total: ''
  };

  handleInputChange = event => {
    const { target } = event;
    const { name, value } = target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    const { id, distancia, tiempo, list } = this.state;

    if ( distancia && tiempo) {
      const id = list.length + 1;
      var arreglo = this.state.data;
      const total =  distancia/tiempo;

      this.setState({
        list: [...list, { id, distancia, tiempo, total }],
        id: '',
        distancia: '',
        tiempo: ''

      });

    } else {
      console.log('Por favor llenar los datos');
    }

    event.preventDefault();
  };

  render() {
    const { id, distancia, tiempo, list, total } = this.state;
    return (
      <>
        <div className="inputs_tours">
          <form onSubmit={this.handleSubmit} className="form_tours">
            <div className="form-group">
              <label htmlFor="distancia">
                <h5>Ingrese la distancia:</h5>
                <input type="number" className="form-control" id="distancia" placeholder="" name="distancia" value={distancia}
                onChange={this.handleInputChange}
                />
              </label>
            </div>
            <br></br>
            <div className="form-group room">
              <label htmlFor="tiempo">
              <h5>Ingrese el tiempo:</h5>
                <input type="number" className="form-control" id="tiempo" placeholder="" name="tiempo" value={tiempo}
                onChange={this.handleInputChange}
                />
              </label>
            </div>
            <br></br>
            <div className="distancia_btn">
              <button type="submit" className="btn btn-dark">Calcular</button>
            </div>
          </form>
        </div>
        <br></br>
        <div className="table_tours">
          <table className="table table-striped">
            <thead>
              <tr>
              <th scope="col">id</th>
                <th scope="col">Distancia</th>
                <th scope="col">Tiempo</th>
                <th scope="col">Velocidad</th>
                <th scope="col">Borrar</th>
                
              </tr>
            </thead>
            <tbody>
              {list.map((item) => { return (
                <ReactDeleteRow key={id} data={item}
                onDelete={ item => { return window.confirm(`Seguro desea borrar ese dato "${item.id}"?` ) }}>
                  <td>{item.id}</td>
                  <td>{item.distancia}</td>
                  <td>{item.tiempo}</td>
                  <td>{item.total}</td>
                </ReactDeleteRow>
              )}) }
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Calculadora;