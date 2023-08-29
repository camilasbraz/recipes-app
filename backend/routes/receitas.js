require('dotenv').config();

const express = require('express');
const router = express.Router();
const { Pool } = require('pg');
const { URL } = require('url');

// console.log('Process Env:', process.env);

// const dbUrl = process.env.DATABASE_URL;
const dbUrl = "postgres://tounwnwt:9t-pwQ_pJafUu-HQ3Orodwy0WyloXqVV@bubble.db.elephantsql.com/tounwnwt"
console.log(`${dbUrl}`);
const parsedUrl = new URL(dbUrl);

const dbConfig = {
  user: parsedUrl.username,
  password: parsedUrl.password,
  host: parsedUrl.hostname,
  port: parsedUrl.port,
  database: parsedUrl.pathname ? parsedUrl.pathname.split('/')[1] : 'default_database_name',
};

const pool = new Pool(dbConfig);

router.get('/', async (req, res) => {
  const { nome, ingredientes, tempoPreparo } = req.query;
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM recipes');
    client.release();
    res.json(result.rows);
  } catch (error) {
    console.error('Erro na consulta:', error);
    res.status(500).json({ error: 'Erro na consulta' });
  }
});

// Rota para retornar as opções de ingredientes
router.get('/ingredientes', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT DISTINCT ingredients FROM recipes');
    const ingredientesOptions = result.rows.map(row => row.ingredients);
    client.release();
    res.json(ingredientesOptions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar opções de ingredientes' });
  }
});

router.get('/nome', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT DISTINCT name FROM recipes');
    const nameOptions = result.rows.map(row => row.name);
    client.release();
    res.json(nameOptions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar opções de nome' });
  }
});


router.get('/tempo', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT DISTINCT preparation_time FROM recipes');
    const timesOptions = result.rows.map(row => row.preparation_time);
    client.release();
    res.json(timesOptions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar opções de tempo' });
  }
});

router.get('/filtrarReceitas', async (req, res) => {
  const { nome, ingredientes, tempoPreparo } = req.query;
  try {
    const client = await pool.connect();

    let query = 'SELECT * FROM recipes WHERE 1 = 1';

    if (nome) {
      query += ` AND name ILIKE '%${nome}%'`;
    }

    if (ingredientes) {
      query += ` AND ingredients ILIKE '%${ingredientes}%'`;
    }

    if (tempoPreparo) {
      // Ajuste para filtrar usando o campo de intervalo
      query += ` AND preparation_time <= INTERVAL '${tempoPreparo}'`;
    }

    const result = await client.query(query);

    client.release();
    res.json(result.rows);
  } catch (error) {
    console.error('Erro na consulta:', error);
    res.status(500).json({ error: 'Erro na consulta' });
  }
});


// pool.end()
//   .then(() => {
//     console.log('All clients have been released');
//   })
//   .catch(err => {
//     console.error('Error releasing clients:', err);
//   });
// Exporte o router
module.exports = router;






