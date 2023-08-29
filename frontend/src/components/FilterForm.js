import React, { useState } from 'react';

const FiltroForm = ({ filtrarReceitas }) => {
  // Estado para os campos do formulário
  const [nome, setNome] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [tempoPreparo, setTempoPreparo] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = event => {
    event.preventDefault();
    const filtros = { nome, ingredientes, tempoPreparo };
    filtrarReceitas(filtros);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome da Receita"
        value={nome}
        onChange={event => setNome(event.target.value)}
      />
      <input
        type="text"
        placeholder="Ingredientes"
        value={ingredientes}
        onChange={event => setIngredientes(event.target.value)}
      />
      <input
        type="text"
        placeholder="Tempo de Preparo"
        value={tempoPreparo}
        onChange={event => setTempoPreparo(event.target.value)}
      />
      <button type="submit">Filtrar</button>
    </form>
  );
};

export default FiltroForm;
