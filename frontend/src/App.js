import { Layout, theme } from 'antd';

import React, { useState } from 'react';
import NameSelect from './components/NameSelect';
import IngredientSelect from './components/IngredientSelect';
import PreparationTimeSlider from './components/PreparationTimeSlider'; 

const { Header, Content, Footer, Sider } = Layout;


const App = () => {

  
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // Estado para armazenar as receitas filtradas
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  // Função para filtrar as receitas na API
  const filterRecipes = async (nameFilter, ingredientFilter, timeFilter) => {
    try {
      const response = await fetch(`/sua-rota-de-filtragem?name=${nameFilter}&ingredient=${ingredientFilter}&time=${timeFilter}`);
      const data = await response.json();
      setFilteredRecipes(data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          color:'#fff',
          
          
        }}
      >
        <div className="demo-logo" />
        <div className='logo-name'>receitas.</div>
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
          }}
        >
           <Sider>
        <div>Nome</div>
        <NameSelect onSelect={nameFilter => filterRecipes(nameFilter, "", "")} />
        <div>Ingredientes</div>
        <IngredientSelect onSelect={ingredientFilter => filterRecipes("", ingredientFilter, "")} />
        <div>Tempo de Preparo</div>
        <PreparationTimeSlider onSelect={timeFilter => filterRecipes("", "", timeFilter)} />
      </Sider>
          <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          >
            {/* Renderize as receitas filtradas aqui */}
            <ul>
              {filteredRecipes.map(recipe => (
                <li key={recipe.id}>{recipe.name}</li>
              ))}
            </ul>
          </Content>

        </Layout>
      </Content>
      <Footer style={{ textAlign: 'right' }}>
  <div>
    <a href="https://github.com/camilasbraz" target="_blank" rel="noopener noreferrer">
      <img src="../public/imgs/github-original.svg" alt="GitHub" />
    </a>
  </div>
  <div>
    <a href="https://linkedin.com/seu_perfil" target="_blank" rel="noopener noreferrer">
      <img src="../public/imgs/linkedin-original.svg" alt="LinkedIn" />
    </a>
  </div>
  <div>
    Template from <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Ant Design</a>
  </div>
</Footer>

    </Layout>
  );
};
export default App;