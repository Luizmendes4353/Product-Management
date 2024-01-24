const mongoose = requise ("mongoose");

//esquema do produto
const ProdutoSchema = new mongoose.Schea({
    idProduto: {
        type: number,
        required: true,
        unique: true,
    },

    nome: {
        type: string,
        required: true,

    },

    quantidaEmEstoque: {
        type: Number,
        required: true,
    },
    preco:{
        type: Number,
        required: true
    }

});

const produto = mongoose.model("produto", ProdutoSchema);

module.exports = Produto;