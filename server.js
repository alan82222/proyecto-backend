const express = require('express');
const cors = require('cors');
require('dotenv').config();
const clienteRouter=require ('./routes/clientes')
class Server {
    constructor(){
        this.app = express(); //Se instancia Express
        this.port = process.env.PORT;    //Definimos el puerto

        //paths   http://localhost:3001/api/v1 
        this.basePath = '/api/v1';   //Ruta base
        this.clientePath = `${this.basePath}/cliente`;//Path para la tabla users

        this.middlewares(); //Invocacion de los middlewares

        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json()) //Para poder interpretar texto en formato JSON
    }

    routes(){
        this.app.use(this.clientePath, clienteRouter); //EndPoint de users
    }

    listen (){
        this.app.listen(this.port, () =>{
            console.log("Server listening on port"+ this.port    )
        });
}
}
module.exports = Server;