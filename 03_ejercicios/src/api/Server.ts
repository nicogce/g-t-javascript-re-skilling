import { env } from "../config/globals";
import { initRestRoutes } from "./routes";
const express = require('express');

class Server {
    private readonly mysql = require('mysql');
    private readonly app;
    private readonly connection;
    
    public constructor() {
        //MySql
        this.connection = this.mysql.createConnection({
            host: env.MYSQL.host,
            user: env.MYSQL.auth.user,
            password: env.MYSQL.auth.pass,
            database : env.MYSQL.dbName
        });

        this.app = express();
        this.app.use(express.json());
    }

    public startConnection () {
        this.connection.connect((err: any) => {
            if (err) throw err;
            console.log("DB Connected!");
            this.app.listen(env.NODE_PORT, () => {
                console.log(`Server is running on port ${env.NODE_PORT}`);
                initRestRoutes(this.app, this.connection);
            });
        });
    }
}

export {Server}