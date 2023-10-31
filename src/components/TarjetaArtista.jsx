'use client'
import React from 'react';
import { useArtistaContext } from '@/provider/artistaProvider';
import { useRouter } from 'next/navigation';

const TarjetaArtista = ({ artista }) => {
  const route = useRouter()
  const {setArtista} = useArtistaContext()

  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 my-4">
      <div className="flex w-full items-center">
        <div className="ml-4">
          <h2 className="text-xl font-semibold">{artista.nombre}</h2>
          <p className="text-gray-600">{artista.edad}</p>
          <p className="text-gray-600">{artista.banda}</p>
          <p className="text-gray-600">{artista.generoMusical}</p>
        </div>
      </div>
      <div className='flex justify-end gap-x-3'>
        <button>Eliminar</button>
        <button
          onClick={()=> {
            setArtista(artista)
            route.push('/registro')
          }}

        >Editar</button>
      </div>
    </div>
  );
};

export default TarjetaArtista;
