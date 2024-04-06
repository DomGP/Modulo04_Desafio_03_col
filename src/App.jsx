import { useState } from 'react'
import { BaseColaboradores } from './BaseColaboradores'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Listado from './components/Listado'
import Header from './components/Header';
import Formulario from './components/Formulario';
import Subtitle from './components/Subtitle';
import Buscador from './components/Buscador';

function App() {

  const [datos, setDatos] = useState(BaseColaboradores) //Se declara el estado llamado 'datos' que almacena a BaseColaboradores.

  const agregarColaborador = (nuevoColaborador) => {
    setDatos([...datos, nuevoColaborador])
    //Esta función se va al componente formulario, para agregar los nuevos colaboradores al estado 'datos'
  }

  return (
    <>
      <Header 
        textTitle = 'Lista de Colaboradores'/>
      <Buscador datos= {datos} />
      <div className='d-flex'>
        <Listado className='col-md-9'
          datos = {datos} />
          <div>
            <Subtitle
              textSubtitle = 'Agregar Colaborador' />
            <Formulario 
              className='col-md-3' 
              agregarColaborador = {agregarColaborador}/>
          </div>
      </div>
    </>
  )
}

export default App
