import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const Home = () => {

    const [equipo, setEquipo] = useState([]);

    useEffect(()=>{
        // console.log('useEffect')
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('localhost:8080/Api/User')
        const users = await data.json()
        //console.log(users)
        setEquipo(users)
    }

    return(
        <>
            <h1>Nosotros</h1>
            <ul>
                {
                    equipo.map(item=>(
                        <li key={item.iduser}>{item.usuario} - {item.nombre}</li>
                    ))
                }
            </ul>
            <Link to={`/home/${10}`}>back to Welcome</Link>
        </>
    )
}

export default Home 

/*
import { useEffect, useState } from "react"

const Home = () => {

const [nombre, setNombre] = useState("");
const [imagen, setImagen] = useState("");

useEffect(()=>{
    const url="https://randomuser.me/api/";
    const peticion=fetch(url);
    peticion
    .then(datos=> datos.json)
    .then(lectura=> {
        setNombre(`${lectura.results[0].name.first}` `${lectura.results[0].name.last}`)
        setImagen(`${lectura.results[0].picture.large}`)
    })
    .catch()
}, [])

    return(
        <div>
            nombre: 
            {nombre}
            <div><img src={imagen}/></div>
        </div>
    )
}

export default Home 
*/