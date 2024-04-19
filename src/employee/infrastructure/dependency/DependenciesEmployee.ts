import { CreateEmployeeUseCase } from "../../application/methodsEmployee/CreateEmployeeUseCase";
import { CreateEmployeeController } from "../controllers/CreateEmployeeController";
import { GetAllEmployeeUseCase } from "../../application/methodsEmployee/GetAllEmployeeUseCase";
import { GetAllEmployeeController } from "../controllers/GetAllEmployeeController";
import { DeleteEmployeeUseCase } from "../../application/methodsEmployee/DeleteEmployeeUseCase";
import { DeleteEmployeeController } from "../controllers/DeleteEmployeeController";
import { MySqlEmployeeRepository } from "../repository/MySqlEmployeeRepository";

export const mySqlEmployeeRepository = new MySqlEmployeeRepository();
export const createEmployeeUseCase = new CreateEmployeeUseCase(mySqlEmployeeRepository);
export const getAllEmployeeUseCase = new GetAllEmployeeUseCase(mySqlEmployeeRepository);
export const deleteEmployeeUseCase = new DeleteEmployeeUseCase(mySqlEmployeeRepository);
export const createEmployeeController = new CreateEmployeeController(createEmployeeUseCase);
export const getAllEmployeeController = new GetAllEmployeeController(getAllEmployeeUseCase);
export const deleteEmployeeController = new DeleteEmployeeController(deleteEmployeeUseCase);