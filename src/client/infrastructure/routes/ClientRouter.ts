import express from "express";

import { createClientController, getAllClientsController } from "../dependency/DependenciesClient";

export const clientRouter = express.Router();

clientRouter.get("/", getAllClientsController.run.bind(getAllClientsController));
clientRouter.post("/", createClientController.run.bind(createClientController));