import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
        <h1><Link to="/">Star Wars App</Link></h1>
        <nav>
            <Link to="otrocomponente">Personajes</Link>
            <Link to="otrocomponente">Naves</Link>
            <Link to="otrocomponente">Peliculas</Link>
            <Link to="otrocomponente">Planetas</Link>
            <Link to="otrocomponente">Vehiculos</Link>
        </nav>
    </header>
  )
}
