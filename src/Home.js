import React, { useEffect, useState } from "react"

const Home = () => {

    const [equipo, setEquipo] = useState([]);

    useEffect(()=>{
        // console.log('useEffect')
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
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
                        <li key={item.id}>{item.name} - {item.email}</li>
                    ))
                }
            </ul>
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