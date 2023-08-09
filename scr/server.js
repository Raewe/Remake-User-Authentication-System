import path, { dirname } from "path";
import { fileURLToPath } from "url";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Conn from "./db/conn.js";
import AdminRoutes from "./routes/AdminRoutes.js";

// // Ejs

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

// Ejs
const dirName = dirname(fileURLToPath(import.meta.url));
app.set("view engine", "ejs");
app.set("views", path.join(dirName, "views/pages"));
app.use(express.static(path.join(dirName, "views")));
// TODO: Error

// Routes
app.use("/admin", AdminRoutes);

// Start server
app.listen(port || process.env.port, () => {
    console.log(`O servidor foi iniciado na porta: ${port}`);
});
