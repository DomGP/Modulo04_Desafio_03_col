import { useState } from "react";
import { BaseColaboradores } from "./BaseColaboradores";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Listado from "./components/Listado";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Subtitle from "./components/Subtitle";
import Buscador from "./components/Buscador";

function App() {
  const [datos, setDatos] = useState(BaseColaboradores); //Se declara el estado llamado 'datos' que almacena a BaseColaboradores.

  const agregarColaborador = (nuevoColaborador) => {
    const id = datos.length + 1;
    setDatos([...datos, { id, ...nuevoColaborador }]);
    //Esta función se va al componente formulario, para agregar los nuevos colaboradores al estado 'datos'
  };
  const datosFiltrados = (term) => {
    const filtrado = datos.filter((colaborador) => {
      return (
        colaborador.nombre.toLowerCase().includes(term.toLowerCase()) ||
        colaborador.correo.toLowerCase().includes(term.toLowerCase()) ||
        colaborador.edad.toString().includes(term) ||
        colaborador.cargo.toLowerCase().includes(term.toLowerCase()) ||
        colaborador.telefono.toString().includes(term)
      );
    });
    setDatos(filtrado);
  };
  return (
    <>
      <Header textTitle="Lista de Colaboradores" />
      <Buscador filtrar={datosFiltrados} />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 col-lg-9 col-xl-9">
            <div className="table-responsive">
              <Listado className="col-md-9" datos={datos} />
            </div>
          </div>
          <div className="col-md-4 col-lg-3 col-lx-3">
            <div>
              <Subtitle textSubtitle="Agregar Colaborador" />
              <Formulario
                className="col-md-3"
                agregarColaborador={agregarColaborador}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
