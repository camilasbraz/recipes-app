import React, { useState, useEffect } from 'react';
import { Select } from 'antd';

const { Option } = Select;

function IngredientSelect() {
  const [ingredientOptions, setIngredientOptions] = useState([]);

  useEffect(() => {
    fetch('https://recipes-app-api-camilasbraz.vercel.app/receitas/ingredientes')
      .then(response => response.json())
      .then(data => {
        setIngredientOptions(data); // Use os dados diretamente como opções
      })
      .catch(error => console.error('Erro ao buscar os dados:', error));
  }, []);

  const handleChange = value => {
    console.log('Selected:', value);
  };

  return (
    <div>
      <Select
        mode="tags"
        style={{ width: '100%' }}
        onChange={handleChange}
        tokenSeparators={[',']}
      >
        {ingredientOptions.map((option, index) => (
          <Option key={index} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </div>
  );
}

export default IngredientSelect;








