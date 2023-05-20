import React, { useState, useEffect } from 'react';
import axios from "axios";

function Listar() {
  const [cachorros, setCachorros] = useState([]);

  const api = axios.create({
    baseURL: "https://localhost:8080",
  });

  useEffect(() => {
    listarCachorrosOrdenados();
  }, []);

  const listarCachorrosOrdenados = () => {
    api.get("/ordenados")
      .then(response => {
        setCachorros(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Cachorros Cadastrados</h1>
      <ul>
        {cachorros.map(cachorro => (
          <li key={cachorro.id}>
            <p>Nome: {cachorro.nome}</p>
            <p>Raça: {cachorro.raca}</p>
            <p>Sexo: {cachorro.sexo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default  Listar;
