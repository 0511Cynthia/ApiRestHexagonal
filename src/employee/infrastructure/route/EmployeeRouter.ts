import express from "express";

import { createEmployeeController, getAllEmployeeController, deleteEmployeeController } from "../dependency/DependenciesEmployee";

export const employeeRouter = express.Router();

employeeRouter.get("/", getAllEmployeeController.run.bind(getAllEmployeeController));
employeeRouter.post("/", createEmployeeController.run.bind(createEmployeeController));
employeeRouter.delete("/", deleteEmployeeController.run.bind(deleteEmployeeController));