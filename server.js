const express = require("express");
const pedidos = require("../dados.json");


    const mostrarpedido=(req, res) => {
    res.send(pedidos)
}
 const mostrarId = (req,res) =>{
     mostrarId
 res.send(pedido)
 }
function novoPedido(req, res) {
    if (req.body) {
        res.send("pedido recebido");
        pedidos.push(req.body);
    } else {
        res.send("erro ao receber");
    }
}

const excluirPedido = (req,res) =>{
    const id = req.params.id;
    pedidos.forEach((pedido, indice)=>{
        if (pedido.id == id){
            pedidos.splice(indice, 1)
        }
    });
    res.send("pedido excluido!")
}

const alterarPedido = (req,res)=> {
    const id = req.params.id;
    const dados = req.body

     pedidos.forEach((pedido) => {
        if(pedido.id == id){                                

            pedido.item = dados.item
            pedido.local = dados.local
            pedido.dataRegistro = dados.dataRegistro
            pedido.valor = dados.valor
            pedido.patrimonio= dados.patrimonio
        }
     });
     res.send("pedido atualizar com sucesso");
};
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const porta = 5000;

app.get("/", mostrarpedido);
app.post("/", novoPedido);
app.delete("/:id", excluirPedido);
app.put("/:id", alterarPedido);

app.listen(porta,() => { 
    console.log(`servidor: http://localhost:${porta}`);
});
