import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export const Informacion = ({ aleatorio }) => {
    console.log(aleatorio);

    const [mostrarInfo, setMostrarInfo] = useState('');
    const [cargando, setCargando] = useState(true)

    const traerDatos = async () => {
        setCargando(true)
        const url = `https://www.breakingbadapi.com/api/quotes/${aleatorio}`;
        const respuesta = await fetch(url);
        const [data] = await respuesta.json();
        setCargando(false)
        setMostrarInfo(data)
    }

    useEffect(() => {
        traerDatos();
    }, [aleatorio])


    return (
        <div className='informacion'>
            {cargando ? <h3>Cargando...</h3> : (
                <>
                    <h2>{mostrarInfo.quote}</h2>
                    <p>{mostrarInfo.author}</p>
                </>
            )}

        </div>
    )
}
