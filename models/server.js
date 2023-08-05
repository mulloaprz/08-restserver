require("dotenv").config();
const express = require('express');
const cors = require('cors');

class Server
{
    constructor()
    {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = "/api/user";

        // Middlewares
        this.middlewares();
        // App Routes
        this.routes();
    }

    middlewares()
    {
        // Public directory
        this.app.use(express.static("public"));
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes()
    {
        this.app.use(this.userPath, require("../routes/user.route"));
    }

    listen()
    {
        this.app.listen(this.port, () => console.log(`Servidor corriendo en ${this.port}`));
    }
}

module.exports = Server;