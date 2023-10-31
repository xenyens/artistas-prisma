'use client'
import React, { useEffect, useState } from 'react';
import { actualizarArtista, grabarArtista } from '@/libs/conexiones';
import { useArtistaContext } from '@/provider/artistaProvider';
import { useRouter } from 'next/navigation';

const FormularioArtistas = () => {
    const [nombre, setnombre] = useState('')
    const [edad, setedad] = useState(0)
    const [banda, setbanda] = useState('')
    const [generoMusical, setgeneroMusical] = useState('')
    const [error, setError] = useState(false)

    const {artista,setArtista} = useArtistaContext()
    const route = useRouter()

    useEffect(()=>{
        if(artista !== null){
            setnombre(artista.nombre)
            setedad(artista.edad)
            setbanda(artista.banda)
            setgeneroMusical(artista.generoMusical)
        }
    },[])


    const handleSubmit = (e) => {
        e.preventDefault();

        if([nombre,edad,banda,generoMusical].includes('')){
            setError(true)
            return
        }
        
        setError(false)
        // este objeto se crea si el artista está null
        const nuevoArtista = {
            nombre,
            edad,
            banda,
            generoMusical}
        
        if(artista === null){
            grabarArtista(nuevoArtista)
            setArtista(null)
            route.push('/')

        }
        else if(artista !== null){
            actualizarArtista(nuevoArtista,artista.id)
            setArtista(null)
            route.push('/veregistro')
        }
    }


  return (
    <div>
        <h1 className="font-bold text-3xl mt-8" >
            {
                !artista ? 'Registro de cantante' : 'Editar Cantante'
            }
        </h1>
      <form onSubmit={handleSubmit} className='flex flex-col items-center space-y-5 border border-gray-300 p-5 rounded-md '>
            
            {error && <div className='bg-red-500 rounded-md font-bold  '> ERROR DEBES LLENAR LOS CAMPOS</div> }

            <div className='flex flex-col w-full'>
                <label htmlFor='nombre' className='uppercase font-bold'>Nombre</label>
                <input 
                    id='nombre'
                    type="String" 
                    placeholder='Nombre' 
                    className='bg-green-200 p-2 rounded-md ' 
                    value={nombre}
                    onChange={e => setnombre(e.target.value)}
                    
                    ></input>
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor='edad' className='uppercase font-bold' >Edad</label>
                <input 
                    id='edad'
                    type="number" 
                    placeholder='Edad' 
                    className='bg-green-200 p-2 rounded-md'
                    value={edad}
                    onChange={(e) => setedad(parseInt(e.target.value, 10))}
                    ></input>
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor='banda' className='uppercase font-bold' >Banda</label>
                <input 
                    id='banda'
                    type="String" 
                    placeholder='Banda' 
                    className='bg-green-200 p-2 rounded-md'
                    value={banda}
                    onChange={e => setbanda(e.target.value)}
                    ></input>
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor='genero' className='uppercase font-bold' >Genero Musical</label>
                <input 
                    id='genero'
                    type="String" 
                    placeholder='Genero Musical' 
                    className='bg-green-200 p-2 rounded-md'
                    value={generoMusical}
                    onChange={e => setgeneroMusical(e.target.value)}
                    ></input>
            </div>
             
            <div className='flex w-full justify-end '>
                <button 
                    type='submit' 
                    className='bg-green-300 rounded-md p-2 font-semibold hover:bg-red-400 transition-colors duration-300 cursor-pointer'
                    onClick={handleSubmit}
                    >Agregar Artista</button>
            </div>

            {/* <div className='flex w-full justify-end '>
                <input 
                    type='button' 
                    value={'Limpiar'} 
                    className='bg-yellow-300 rounded-md p-2 font-semibold hover:bg-red-400 transition-colors duration-300 cursor-pointer'
                    onClick={limpiar}
                    ></input>
            </div> */}
        </form>
        
    </div>
  )
}

export default FormularioArtistas