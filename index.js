// import * as server from './api/server'
// const server = require('./api/server')

import express from "express";
const server = express();
import cors from "cors";
server.use(cors());
import helmet from "helmet";
server.use(helmet());

server.use(express.json());

server.get("/", (req, res) => {
  res.send("Welcome to the api");
});


server.listen(5555, ()=> {console.log('server running')})
