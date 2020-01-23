const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-n2w6j.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

//app.use(cors({ origin: 'http://localhost:3000/' })) libera para o endereco especificado
app.use(cors()); //libera geral
app.use(express.json());
app.use(routes);

app.listen(4444);