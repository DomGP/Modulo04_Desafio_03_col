import { BaseColaboradores } from './BaseColaboradores'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Listado from './components/Listado'
import Header from './components/Header';
import Formulario from './components/Formulario';
import Subtitle from './components/Subtitle';

function App() {

  return (
    <>
      <Header 
        textTitle = 'Lista de Colaboradores'/>
      <div>
        <Listado 
          datos = {BaseColaboradores} />
          <div>
            <Subtitle
              textSubtitle = 'Agregar Colaborador' />
            <Formulario />
          </div>
      </div>
    </>
  )
}

export default App
