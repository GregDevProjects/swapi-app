import React, { useState } from 'react'

function App () {
  const [starWarsCharacter, setStarWarsCharacter] = useState(false)
  const getStarWarsCharacter = (id) => {
    fetch(`${process.env.REACT_APP_BASE_URL}star-wars-characters/${id}`)
      .then(res => res.json())
      .then(
        (result) => {
          setStarWarsCharacter(result)
        },
        (error) => {
          console.warn(error)
        }
      )
  }
  const textInput = React.createRef()

  return (
    <div>
      <button onClick={() => { getStarWarsCharacter(1) }}>Luke</button>
      <button onClick={() => { getStarWarsCharacter(2) }}>C-3PO</button>
      <button onClick={() => { getStarWarsCharacter(3) }}>R2-D2</button>
      <button onClick={() => { getStarWarsCharacter(4) }}>Darth Vader</button>
      <button onClick={() => { getStarWarsCharacter(5) }}>Leia Organa</button>
      <input ref={textInput}></input><button onClick={() => { getStarWarsCharacter(textInput.current.value) }}>Search</button>
      {starWarsCharacter && (
      <>
        <div>{starWarsCharacter.name}</div>
        <div>{starWarsCharacter.height}</div>
        <div>{starWarsCharacter.mass}</div>
        <div>{starWarsCharacter.hairColor}</div>
        <div>{starWarsCharacter.skinColor}</div>
        <div>{starWarsCharacter.gender}</div>
        <div>{starWarsCharacter.birthYear}</div>
        <h3>homePlanet</h3>
        <div>{starWarsCharacter.homePlanet.title}</div>
        <div>{starWarsCharacter.homePlanet.terrain}</div>
        <div>{starWarsCharacter.homePlanet.population}</div>
        <h3>species</h3>
        {starWarsCharacter.species.map((species, i) => {
          // Return the element. Also pass key
          return (
            <div key={i}>
              <div >{species.name}</div>
              <div >{species.averageLifespan}</div>
              <div >{species.classification}</div>
              <div >{species.language}</div>
            </div>
          )
        })}
        <h3>films</h3>
        {starWarsCharacter.films.map((film, i) => {
          // Return the element. Also pass key
          return (
            <div key={i}>
              <div >{film.title}</div>
              <div >{film.director}</div>
              <div >{film.producers}</div>
              <div >{film.date}</div>
            </div>
          )
        })}
      </>
      )}

    </div>
  )
}

export default App
