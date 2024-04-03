import { useState } from "react";
const Formulario = () => {

    const [colaborador, setColaborador] = useState({
        nombre: "",
        email: "",
        edad: "",
        cargo: "",
        telefono: ""
    });
    const ingresoColab = (e) =>{
        e.preventDefault()
        setColaborador(e.target.value)
    }
    
  return (
    
    <div className="container">
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            aria-describedby="nameHelp"
            name="nombre"
            value={colaborador.nombre}
            placeholder="Ingrese su nombre"
            onChange={ingresoColab}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            value={colaborador.email}
            placeholder="Ingrese su correo electronico"
            onChange={ingresoColab}
          />
        </div>
        <div className="mb-3">
          <input 
          type="text" 
          className="form-control" 
          id="exampleInputAge1"
          name="edad"
          value={colaborador.edad}
          placeholder="Ingrese su edad" 
          onChange={ingresoColab} 
          />
          
        </div>
        <div className="mb-3">
          <input 
          type="text" 
          className="form-control" 
          id="exampleInputAge1"
          name="cargo"
          value={colaborador.cargo}
          placeholder="Ingrese su cargo"
          onChange={ingresoColab} />
        </div>
        <div className="mb-3">
          <input 
          type="text" 
          className="form-control" 
          id="exampleInputPhoneNumber1"
          name="telefono"
          value={colaborador.telefono}
          placeholder="Ingrese su numero de teléfono"
          onChange={ingresoColab} />
        </div>
        <button type="submit" className="btn btn-primary">
          Registrar Colaborador
        </button>
      </form>
      </div>
    
  );
};

export default Formulario;
