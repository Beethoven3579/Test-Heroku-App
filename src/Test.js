import React from 'react'
import axios from 'axios'

class Test extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          character: '',
          homeworld: '',
          species: '',
        }
      }
     
      componentDidMount() {
        axios.get('https://swapi.dev/api/people/1')
        .then(response => {
          console.log(response)
           this.setState({character: response.data})
        })
        .catch(error => {
          console.log(error);
        });
      axios.get('https://swapi.dev/api/planets/1')
        .then(response => {
          console.log(response)
           this.setState({homeworld: response.data})
        })
        .catch(error => {
          console.log(error);
        });
      
      axios.get('https://swapi.dev/api/species/1')
        .then(response => {
          console.log(response)
           this.setState({species: response.data})
        })
        .catch(error => {
          console.log(error);
        });
      }
       render() {
         const { character } = this.state;
         const { homeworld } = this.state;
         const { species } = this.state;
         return (
           <div>Test
             <h1>{character.name} 
             | {character.birth_year}
             | {character.mass} 
             | {character.height} 
             | {homeworld.name}
             | {species.classification}</h1>
             
           </div>
         )
      }  
}

export default Test