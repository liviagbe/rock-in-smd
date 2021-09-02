//first app yay \o/ (socorro ;-;)

const express = require("express");
const app = express();
const routes = require("./routes");
const expressLayouts = require("express-ejs-layouts");
const { urlencoded } = require("express");


const port=3030;
const address = "localhost";

const utils = require("./utils");

const faker = require("faker"); //modulo usado para criar dados fakes aleatorios para testes

let toggleBol=true;


// a palavra reservada "global" cria uma variável ou objeto global para o sistemas. Ele pode ser visto em qualquer parte do código ou dos módulos do projeto. Assim, Users podem ser vistos tanto aqui no index.js quanto em routes.js
global.users =[];

for (let cont=0;cont<20;cont++){
    users.push({name:faker.name.findName(),email:faker.internet.email(),address:faker.address.streetAddress(),age:utils.getRandomByInterval(15,50,true),heigth:utils.getRandomByInterval(1.50,1.70,false).toFixed(2),vote:toggleBol});
    toggleBol=!toggleBol;
}


//ativa uso do EJS e do Express-ejs-layouts
app.set('view engine','ejs');
app.use(expressLayouts);

app.use(express.urlencoded({extended:false})); //prepara a aplicacao para receber dados na forma de query string
app.use(express.json()); //prepara a aplicacao para receber dados no formato JSON


//Criando usando rotas simples que estão no arquivo routes.js
app.use('/',routes);

//Criando um servidor simples com o Node.js e o Express
const server = app.listen(port,address,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Servidor executando no endereço ${host} e porta ${port}`);
});