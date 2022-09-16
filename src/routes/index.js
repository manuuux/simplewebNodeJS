import express from 'express'

import {dirname, join} from "path"
import { fileURLToPath } from "url"
const app = express()

/*
Se agregan rutas de esta manera, ya que solo con el complemento de Routes habia un error en como se
configuraban las views y finalmente no se encontraba el archivo de vistas.
*/

const __dirname = dirname(fileURLToPath(import.meta.url));
app.set("views", join(__dirname, "../views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => res.render("index", { title: "NodeBrain" }))
app.get("/about", (req, res) => res.render("about", { title: "About NodeBrain" }))
app.get("/contact", (req, res) => res.render("contact", { title: "Contact NodeBrain" }))

export default app