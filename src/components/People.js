import React, { useEffect, useState } from 'react'
import { getAPI } from '../api/getAPI'

export const People = () => {

    const [people, setPeople] = useState([])
    const [api, setApi] = useState([])
    useEffect(() => {

        const getAPI = async () => {
            const url = `https://swapi.dev/api/people`
            const response = await fetch(url)
            const result = await response.json()
            setPeople(result.results)
            setApi(result)
        }
        getAPI()
    }, [])
    

  return (
    <div className="container">
        <h2>Personajes</h2>
        <div className="list">

        {
            people.map(person =>(
                <div className="people">
                    <h3>Nombre: {person.name}</h3>
                    <p>Altura: {person.height}</p>
                    <p>Nacimiento: {person.birth_year}</p>
                    <p>Color de Pelo: {person.hair_color}</p>
                    <p>Color de Ojos: {person.eye_color}</p>
                    <p>Genero: {person.gender}</p>
                </div>
            ))
        }
        </div>
    </div>
  )
}
