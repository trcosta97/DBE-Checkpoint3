import React, {Component} from 'react';
import axios from 'axios';
import "./Listar.css"


const api = axios.create({
  baseURL: `http://localhost:8080`
})

class Listar extends Component{
  
  state = {
    cachorros : []
  }
  
  constructor(){
    super()
    api.get('/ordenados').then(res=>{
      console.log(res.data)
      this.setState({cachorros : res.data})
    })
  }

  render(){
    return(
      <div>
        <h2>Cachorros cadastrados: </h2>
        {this.state.cachorros.map(cachorro =><h4 key={cachorro.id}>
          Id: {cachorro.id} - Nome: {cachorro.nome} - Raça: {cachorro.raca} - Sexo: {cachorro.sexo}
          </h4>
          )}
      </div>
    )
  }
}

export default Listar

