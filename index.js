import express from "express";
import {engine} from 'express-handlebars';
import {router} from "./routes/routes.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.PORT || 3000;

const app = express();

app.engine("handlebars", engine({
	defaultLayout: "principal"
}));
app.set("view engine", "handlebars");
app.set('views', './views');

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use(express.static(__dirname + "/public"));

app.use("/", router);

app.listen(port, ()=>console.log(`Listening at port ${port}...`));
