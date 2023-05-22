import React from 'react';
import './App.css';
import { useState } from 'react';
import axios from "axios";
import Listar from "./component/Listar/Listar"
import CampoTexto from './component/CampoTexto';
import Botao from './component/Botao';

function App() {
  
  const [id, setId] = useState('');
  const [nome, setNome] = useState('')
  const [raca, setRaca] = useState('')
  const [sexo, setSexo] = useState('')

  const aoSalvar = (event) => {
    event.preventDefault()
    const data = {
        nome: nome,
        raca: raca,
        sexo: sexo,
    };

    axios.post('http://localhost:8080/cachorro', data)
        .then(response => {
            console.log(response.data);
            alert("Cachorro cadastrado!")
            setNome('')
            setRaca('')
            setSexo('')
        })
        .catch(error => {
            console.log(error);
            console.log(data);
        });
};

const aoAtualizar = (event) => {
  event.preventDefault()
  const data = {
      nome: nome,
      raca: raca,
      sexo: sexo,
  };

  axios.put(`http://localhost:8080/cachorro/${id}`, data)
      .then(response => {
          console.log(response.data);
          alert("Cachorro atualizado!")
          setNome('')
          setRaca('')
          setSexo('')
      })
      .catch(error => {
          console.log(error);
          console.log(data);
      });
};

const aoExcluir = (event) => {
  event.preventDefault()
  const data = {
    nome: nome,
    raca: raca,
    sexo: sexo,
};

  axios.delete(`http://localhost:8080/${id}`, data)
      .then(response => {
          console.log(response.data);
          alert("Cachorro excluido!")
          setNome('')
          setRaca('')
          setSexo('')
      })
      .catch(error => {
          console.log(error);
          console.log(data);
      });
};


  
    


  return (
    <div>
      <section>
          <form onSubmit={aoSalvar} class='cadastro'>
            <h1>Cadastro</h1>
            <CampoTexto value={nome} obrigatorio={true} onChange={event => setNome(event.target.value)} placeholder="Digite o nome" />
            <CampoTexto value={raca} obrigatorio={true} onChange={event => setRaca(event.target.value)} placeholder="Digite a raça" />
            <CampoTexto value={sexo} obrigatorio={true} onChange={event => setSexo(event.target.value)} placeholder="Digite o sexo (M ou F)" />
            <Botao>
              Cadastrar
            </Botao>
          </form>
      </section>
      <section>
      <form onSubmit={aoAtualizar} class='atualizar'>
            <h1>Atualizacao</h1>
            <CampoTexto value={id} obrigatorio={true} onChange={event => setId(event.target.value)} placeholder="Digite o Id" />
            <CampoTexto value={nome} obrigatorio={false} onChange={event => setNome(event.target.value)} placeholder="Digite o nome" />
            <CampoTexto value={raca} obrigatorio={false} onChange={event => setRaca(event.target.value)} placeholder="Digite a raça" />
            <CampoTexto value={sexo} obrigatorio={false} onChange={event => setSexo(event.target.value)} placeholder="Digite o sexo (M ou F)" />
            <Botao>
              Atualizar
            </Botao>
          </form>
      </section>
      <section>
      <form onSubmit={aoExcluir} class='deletar'>
            <h1>Atualizacao</h1>
            <CampoTexto value={id} obrigatorio={true} onChange={event => setId(event.target.value)} placeholder="Digite o Id" />
            <Botao>
              Excluir
            </Botao>
          </form>
      </section>
      <Listar/>
    </div>

  )   
}

export default App;
