//////////////////////////////////////////////////////////////////////////////////
//                        instalação nodemon Windowns                           //
// -Abra o powershell como administrador e navegue até a pasta do seu projeto   //
//                                                                              //
// -Exeute o seguinte comando (npm install nodemon -D), -D de desenvolvimento   //
//                                                                              //
// -Ele ira instalar com alguns WARNIMGS                                        //
//                                                                              //
// -Execute o seguinte comando no powershell (Set-ExecutionPolicy Unrestricted) //
//                                                                              //
// -Pronto o nodemon está habilitado para uso                                   //
//                                                                              //                  
// -No seu projeto agora em package.json deve constar um devDependencies com o  //
// nodemon e sua versão ( é o resultado do - D na instalação), essa é uma depen-//
// de desenvolvimento, ou seja, quando fizer o build do projeto ela não será  u-//
// sada.                                                                        //
//                                                                              //
// -Ainda em package.json o conteudo de script por padrão tem um ("test":echo...//
// delete essa linha e substitua pelo conteudo abaixo:                          //
// "start": "nodemon index.js"                                                  //
// observe que start é a referencia que iremos usar no comando do npm e index,js//
// é o arquivo que vc deseja rodar                                              //
//////////////////////////////////////////////////////////////////////////////////  

/*
--> Rotas / Recurso
--> Metodos HTTP:
    # GET - usado para 'pegar' uma informaçaõ
    # POST - usado para imputar dados
    # PUT  - usado para alterar um registro já existente
    # DELETE - usado para deletar registros
--> Tpos de de Parametros:
    # QueryParamns - Parametros nomeados enviados na rota apos "?" (filtros, paginação)
    # RouteParamns - Parametro para identificar um recurso "users/:1"
    # RequestBoby -  Corpo da requisição, utilizado para criar ou alterar registros
--> Banco de Dados
    # SQL - MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    # Driver - SELECT * FROM user
    # Query Builder = table('user').select('*').where()
    # NoSQL - MongoDB, CouchDB etc
    #
    # INSTALANDO QUERY BUILDER - KNEX
    # - NO TERMINAL EXECUTE O COMANDO  npm install knex (powershell)
    # - APOS A INSTALAÇÃO, EXECUTE O COMANDO O DRIVER DO BANCO  npm install sqlite3
    # - apos a instalação do driver do banco no terminal do VS rode npx knex init
    #
    #
    #



    */

const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
