import express from "express";
import {  readAllUsers } from "./controllers/UserController";
import {  createCalcado, deleteCalcado, readAllCalcado, updateCalcado } from "./controllers/CalcadosController";
import { readAllBrandCalcado, readAllSizeCalcado, readStock } from "./repositorie/CalcadoRepository"


const routes = express.Router();

routes.get("/users", readAllUsers);
routes.post("/calcados", createCalcado)
routes.get("/calcados", readAllCalcado)
routes.patch("/calcados/atualizar/:id", updateCalcado)
routes.delete("/calcados/deletar/:id", deleteCalcado)
routes.get("/calcados/estoque", readStock);
routes.get("/calcados/marca/:marca", readAllBrandCalcado);
routes.get("/calcados/tamanho/:tamanho", readAllSizeCalcado);


export default routes;
