import Form from 'react-bootstrap/Form';

const Buscador = ({datos}) => {

    const buscarColaborador = (e) =>{
        console.log(e)
       const datosFiltrados = datos.filter(
            (element) => element.nombre.includes(e)
        )
        console.log(datosFiltrados)
    }

    return (
        <>
            <Form.Control
                className='mb-3 buscadorStyle'
                type="text" 
                placeholder="Ingresa un nombre" 
                onChange={(e) => buscarColaborador(e.target.value)}/>
        </>
    )
}

export default Buscador