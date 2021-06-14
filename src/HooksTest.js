import React, {useState, useEffect} from 'react'
import axios from 'axios'



const HooksTest = () => {
    const [characters, setCharacter] = useState([{}]);
    const [planets, setPlanets] = useState([{}]);
    const [species, setSpecies] = useState([{}]);


useEffect(() => {
    axios.get('https://swapi.dev/api/people/1')
    .then(response => {
      setCharacter(response.data)
    })
    axios.get('https://swapi.dev/api/planets/1')
    .then(response => {
        setPlanets(response.data)
    })
    axios.get('https://swapi.dev/api/species/1')
    .then(response => {
        setSpecies(response.data)
    })
    .catch(error => {
      console.log(error);
    });
},[]);
   
    return (
        <div>
            <div className="character-list">
              <h1>{characters.name} 
              | {characters.birth_year} 
              | {characters.mass} 
              | {characters.height}
              | {planets.name}
              | {species.name}</h1>
              
            </div>
            <h1>I'm working</h1>
        </div>
    )
}

export default HooksTest