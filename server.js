import express from "express";

const app = express();

const PORT = 3000

app.get("/", (req, res) => {
    res.send ("Boas-vindas à Central de Informações da Escola 🚀")
});

app.get("/status", (req, res) => {
    res.json({status_servidor: "online"});
});

app.get ("/informacao", (req,res) => {
    res.json ({nome:"SENAI", cidade:"Valinhos", tipo: "Privada"});
});

const cursos = [
    {id:"1", nome: "DS"},
    {id:"2", nome: "Elétrica"},
    {id:"3", nome: "Mecânica"}
];

app.get("/cursos", (req, res) => {
    res.json (cursos);
});

app.get ("/professor", (req,res) => {
    res.json ({nome: "Eduardo", disciplina: "DS", email:"Eduardo@senai.br" })
});

const orientacoes = [
    {status: "Status do servidor",
     informacao: "informações importantes",
     cursos: "Vizualizar os cursos disponiveis",
     professor: "Informações sobre o professor"
    }
];

app.get ("/ajuda", (req,res) => {
    res.json (orientacoes)
});

app.listen(PORT, () => console.log (`Servidor em http://localhost:${PORT}`));