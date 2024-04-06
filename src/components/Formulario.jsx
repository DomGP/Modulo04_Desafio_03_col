import { useState } from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alerta from "./ALerta";

const Formulario = ({agregarColaborador}) => {

    /* const [colaborador, setColaborador] = useState({
        nombre: "",
        email: "",
        edad: "",
        cargo: "",
        telefono: ""
    }); */

  //ESTADOS DEL FORMULARIO
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [edad, setEdad] = useState('')
  const [cargo, setCargo] = useState('')
  const [telefono, setTelefono] = useState('')

  const generarIdUnico = () => {
    return Math.floor(Math.random() * 100)
  }
  const [error, setError] = useState(false); //estado que nos muestra si estan todos los campos completados o no
  const [registroExitoso, setRegistroExitoso] = useState(false);
  const ingresoColab = (e) => {
    e.preventDefault()
    const nuevoColaborador = {
      id: generarIdUnico(),
      nombre,
      correo,
      edad,
      cargo,
      telefono,
    };
    if (
      nombre === "" ||
      correo === "" ||
      edad === "" ||
      cargo === "" ||
      telefono === ""
    ) {
      setError(true);
      setRegistroExitoso(false);
      return;
    }
    agregarColaborador(nuevoColaborador)
    
    //Limpia los campos despues de agregar el colaborador
    setNombre('');
    setCorreo('');
    setEdad('');
    setCargo('');
    setTelefono('');
    setRegistroExitoso(true);
    setError(false);
  }
    
  return (
    
    <div className="container">
      <Form 
                className='formStyle'
                onSubmit={ingresoColab}>
                <Form.Group 
                    className="mb-3">
                    <Form.Control 
                        className="inputShort" 
                        type="name" 
                        placeholder="Nombre del colaborador"
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)}/>
                </Form.Group>

                <Form.Group 
                    className="mb-3">
                    <Form.Control 
                        className="inputShort"  
                        type="email" 
                        placeholder="Email del colaborador" 
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}/>
                </Form.Group>

                <Form.Group 
                    className="mb-3">
                    <Form.Control 
                        className="inputShort" 
                        type="number" 
                        placeholder="Edad del colaborador" 
                        value={edad}
                        onChange={(e) => setEdad(e.target.value)}/>
                </Form.Group>

                <Form.Group 
                    className="mb-3">
                    <Form.Control 
                        className="inputShort" 
                        type="text" 
                        placeholder="Cargo del colaborador"
                        value={cargo} 
                        onChange={(e) => setCargo(e.target.value)}/>
                </Form.Group>

                <Form.Group 
                    className="mb-3">
                    <Form.Control 
                        className="inputShort" 
                        type="number" 
                        placeholder="Teléfono del colaborador" 
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}/>
                </Form.Group>

                
                <Button 
                    className='buttonStyle' 
                    type="submit">
                    Agregar colaborador
                </Button>
                {error && ( //mensaje para indicar que faltan datos
          <Alerta message="Todos los campos son obligatorios" success={false} />
        )}
        {registroExitoso && ( //mensaje para saber indicar datos registrados
          <Alerta message="Los datos han sido registrados" success={true} />
        )}
            </Form>
      </div>
    
  );
};

export default Formulario;
