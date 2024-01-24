const express = require('express');
const mongoose = require('mongoose');
const produtoRouter = require('./routes/produtos')
const PORT = 3000;
const app = express();

// conectando ao mongoDB
mongoose.connect('mongodb://localhost:27017/Produtc-Management',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//configurando o express para usar EJS e servir arquivos estaticos da pasta 'PUBLIC'
app.set('view engine', 'ejs');
app.use(express.static('public'));

//usando as rotas do protudo
app.use('/produtos', produtoRouter);

//iniciando o servidor 
app.listen(PORT , () => {
    console.log(`servidor rodando na port ${PORT}`)
});