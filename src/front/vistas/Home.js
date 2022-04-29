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

   /* useEffect(() => {
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
    */
    const [todos, setTodos] = useState();
    const [todos2, setTodos2] = useState();
    const url = 'https://pokeapi.co/api/v2/berry/1'
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON)
        //console.log(response.status)
        //console.log(responseJSON)
    }
    const url2 = 'localhost:8080/Api/Sub/'
    const fetchApi2 = async () => {
        const response2 = await fetch(url2)
        const responseJSON2 = await response2.json()
        setTodos2(responseJSON2)
        console.log("hola"+response2.status)
        console.log(responseJSON2)
    }
    

    useEffect(() => {
        fetchApi()
        fetchApi2()
    }, [])

    return(
        <>
            <h1>Home</h1>
            <li>{!todos ? 'Cargando...' : todos.name}</li>
            <li>{!todos ? 'Cargando...' : todos.max_harvest}</li>
            <li>{!todos ? 'Cargando...' : todos.size}</li>
            <li>{!todos ? 'Cargando...' : todos.smoothness}</li>
            <li>{!todos ? 'Cargando...' : todos.name}</li>
            
            <h3>{/*equipo2*/}</h3>
            <ul>
                {/*
                    equipo.map(item=>(
                        <li key={item.iduser}>{item.usuario} - {item.nombre}</li>
                    ))
                    */}
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