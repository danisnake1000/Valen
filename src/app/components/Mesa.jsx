 "use client"
import React, { useState } from 'react';

const DatosComponent = ({ datos }) => {
  const [busqueda, setBusqueda] = useState('');
  
  // Manejar cambios en el campo de búsqueda
  const handleInputChange = (e) => {
    setBusqueda(e.target.value);
  };
  
  // Filtrar los datos según la búsqueda
  const resultados = datos.filter(mesa => {
    // Convertir la búsqueda y los nombres de la mesa a minúsculas para una comparación insensible a mayúsculas y minúsculas
    const busquedaMinuscula = busqueda.toLowerCase().trim();
    const nombresMinuscula = mesa.nombre.map(nombre => nombre.toLowerCase().trim());
    
    // Verificar si algún nombre de la mesa incluye la búsqueda
    return nombresMinuscula.some(nombre => nombre.includes(busquedaMinuscula));
  });
  
  return (
    <div className="max-w-md mx-auto p-4">
      <input 
        type="text"
        placeholder="Buscar nombre..."
        value={busqueda}
        onChange={handleInputChange}
        className="w-full text-black rounded border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:ring-2 outline-none px-4 py-0 "
      />
      <ul className="mt-4">
        {!resultados.length ? "No encuentro tu nombre" : resultados &&
        resultados.map((mesa, index) => (
          <li key={index} className="mb-2">
            <span className="font-bold">Mesa {mesa.mesa}:</span> {mesa.nombre.join(', ')}
          </li>
        ))}
        { }
      </ul>
    </div>
  );
};

export default DatosComponent;




