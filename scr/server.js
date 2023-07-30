import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import Conn from "./db/conn.js";
import AdminRoutes from "./routes/AdminRoutes.js";

const app = express();
const port = 3000;

// Body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors
app.use(cors());

// Dotenv
dotenv.config();

// Connect DataBase
const connenctDb = new Conn(process.env.mongoose);
connenctDb.start();

// Routes
app.use("/admin", AdminRoutes);

// Start server
app.listen(port || process.env.port, () => {
    console.log(`O servidor foi iniciado na porta: ${port}`);
});
