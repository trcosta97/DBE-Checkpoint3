import React from 'react';
import './App.css';
import { useState } from 'react';
import axios from "axios";
import Listar from "./component/Listar/Listar"

function App() {
  
  const [id, setId] = useState('');
  const [nome, setNome] = useState('')
  const [raca, setRaca] = useState('')
  const [sexo, setSexo] = useState('')

  const api = axios.create({
    baseURL: "https://localhost:8080",
  });
  
  const cadastrar = ()=>{
    const data = {
      nome: nome,
      raca: raca,
      sexo:sexo
    }

    api.post("/cachorro", data)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      if (error.response) {
        // Erro de resposta da API
        console.error(error.response.data);
        console.error(error.response.status);
      } else if (error.request) {
        // Erro de rede
        console.error("Erro de rede:", error.request);
      } else {
        // Erro desconhecido
        console.error("Erro desconhecido:", error.message);
      }
    });
};

  const atualizar = () => {
    const data = {
      nome: nome,
      raca: raca,
      sexo: sexo
    };

    api.put(`/cachorro/${id}`, data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const deletar = () => {
    api.delete(`/${id}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };



  const handleIdChange = event => {
    setId(event.target.value);
  };

  const handleNomeChange = event =>{
    setNome(event.target.value)
  }

  const handleRacaChange = event =>{
    setRaca(event.target.value)
  }

  const handleSexoChange = event =>{
    setSexo(event.target.value)
  }

  return (
    <div>
      <form className="cadastro">
        <h2>Cadastro/Atualização</h2>
        <label>ID:
          <input type="text" value={id} onChange={handleIdChange} />
        </label>
        <label>Nome:  
          <input type="text" value={nome} onChange={handleNomeChange}/>
        </label>
        <label>Raça:
          <input type="text" value={raca} onChange={handleRacaChange}/>
        </label>
        <label>Sexo:
          <input type="text" value={sexo} onChange={handleSexoChange}/>
        </label>
        <button type="button" onClick={cadastrar}>Cadastrar</button>
        <button type="button" onClick={atualizar}>Atualizar</button>
        <button type="button" onClick={deletar}>Deletar</button>          
      </form>
      <Listar/>
    </div>
  );
}

export default App;
