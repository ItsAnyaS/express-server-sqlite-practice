// import express from "express";
// import cors from "cors";
// import helmet from "helmet";
// // import testData from '../testData'

// const server = express();
// server.use(cors());
// server.use(helmet());
// server.use(express.json());

// server.get("/", (req, res) => {
//   res.send("Welcome to the api");
// });


// server.get("/todos", (req, res) => {
//     // res.json(testData)
// });

// server.post("/todos", (req, res) => {

// });
// server.put("/todos/:id", (req, res) => {

// });
// server.delete("/todos/:id", (req, res) => {

// });
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


module.exports = server;