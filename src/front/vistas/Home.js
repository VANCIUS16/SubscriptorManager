import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const Home = () => {

    const [equipo, setEquipo] = useState([]);
    const [equipo2, setEquipo2] = useState();
    /*useEffect(()=>{
        // console.log('useEffect')
        obtenerDatos()
    }, [])*/
    
   /* useEffect(()=>{
        const url='localhost:8080/Api/Sub'
        const peticion = fetch(url)
        peticion
        .then(datos=>datos.json())
        .then(lectura=>{
            console.log(lectura.results[0])
        })
        .catch((e)=>{console.log(e)})
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('localhost:8080/Api/Sub')
        const users = await data.json()
        setEquipo2(data)
        console.log(data)
        console.log(users)
        setEquipo(users)
    }*/

    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
            console.log("UseEffect")
            const data = await fetch('localhost:8080/Api/Sub');
            console.log(data);
            console.log("data");

        }
      
        // call the function
        fetchData()
          // make sure to catch any error
          .catch(console.error);
      }, [])


    return(
        <>
            <h1>Nosotros</h1>
            <h3>{equipo2}</h3>
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