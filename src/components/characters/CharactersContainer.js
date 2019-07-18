import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class CharactersContainer extends Component {
  state={
    characters:[]
  }

  componentDidMount(){
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(({data})=>{
      console.log(data);
      this.setState({characters:[data.results[1],data.results[2],data.results[3]]})
      
    })
    .catch(err=>console.log(err))
  }

  render() {
    const { characters } = this.state
    return (
      <>
        <h2>Characters</h2>
        {characters.map((character,id)=>(
          <div key={character.id}> 
            <Link to={`/character/${character.id}`}>
              
            <button>{character.name}</button>
            </Link>
          </div>
         ) )}
      </>
    )
  }

}
