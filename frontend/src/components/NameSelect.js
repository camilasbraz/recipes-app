import React, { useState, useEffect } from 'react';
import { Select } from 'antd';

const { Option } = Select;

function SearchSelect() {
  const [nameOptions, setNameOptions] = useState([]);

  useEffect(() => {
    fetch('https://recipes-app-api-camilasbraz.vercel.app/receitas/nome')
      .then(response => response.json())
      .then(data => {
        setNameOptions(data);
      })
      .catch(error => console.error('Erro ao buscar os dados:', error));
  }, []);

  return (
    <div>
      <Select
        showSearch
        placeholder="Selecione a receita"
        optionFilterProp="children"
      >
        {nameOptions.map(option => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </div>
  );
}

export default SearchSelect;
