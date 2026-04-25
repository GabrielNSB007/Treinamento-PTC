import express from "express";
import {  readAllUsers } from "./controllers/UserController";
import {  createCalcado, deleteCalcado, readAllCalcado, updateCalcado } from "./controllers/CalcadosController";


const routes = express.Router();

routes.get("/users", readAllUsers);
routes.post("/calcados", createCalcado)
routes.get("/calcados", readAllCalcado)
routes.patch("/calcados/atualizar/:id", updateCalcado)
routes.delete("/calcados/deletar/:id", deleteCalcado)


export default routes;
