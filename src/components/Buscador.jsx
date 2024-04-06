import React, { useState } from 'react';

const Buscador = ({ filtrar }) => {
  const [busqueda, setBusqueda] = useState('');

  const buscarCoinci = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  return (
    <div>
      <input className='"input-group input-group-sm mb-3"'
        type="text"
        placeholder="Buscar..."
        value={busqueda}
        onChange={buscarCoinci}
      />
    </div>
  );
};

export default Buscador;
