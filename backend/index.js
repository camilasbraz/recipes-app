// Import packages
const express = require("express");
const receitas = require("./routes/receitas");
const teste = require("./routes/teste");
const cors = require('cors');

// Middlewares
const app = express();
app.use(express.json());
app.use(cors({
    origin: '*'
  }));

// Routes
app.use("/receitas", receitas);
app.use("/teste", teste);

// connection
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));