import express from "express";
import * as dotenv from "dotenv";
import Conn from "./db/conn.js";
import AdminRoutes from "./routes/AdminRoutes.js";

const app = express();

// Dotenv
dotenv.config();
// Connect DataBase
const connenctDb = new Conn(process.env.mongoose);
connenctDb.start();
// Ejs

// Routes
app.use("/admin", AdminRoutes);

// Start server
app.listen(process.env.port, () => {
    console.log(`O servidor foi iniciado na porta: ${process.env.port}`);
});
