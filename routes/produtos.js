const express = require("express");
const route = express.Router();
const Produto = require ("../models/produto");

// rota para obter os produtos
router.get('/', async (req, res) => {
    try{
        const produtos = await Produto.Find();
        res.json(produtos);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// rota para criar um no produto
router.post('/', async (req, res) => {
    const produto = new produto({
        idProduto: req.body.idProduto,
        nome: req.body.nome,
        preco: req.body.preco,
        quantidadeEmEstoque: req.body.quantidadeEmEstoque 
           
    });
    try {
        const novoProduto = await produto.save();
        res.status(201).json(novoProduto);
        } catch (err) {
            res.status(400).json({message:err.message});
        }
    });

module.exports = router; 