import { Request, Response } from "express";
import { GetAllEmployeeUseCase } from "../../application/methodsEmployee/GetAllEmployeeUseCase";

export class GetAllEmployeeController {
  constructor(readonly getAllEmployeeUseCase: GetAllEmployeeUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const employees = await this.getAllEmployeeUseCase.run();
      console.log(employees);
      if (employees){
        res.status(200).send({
          status: "success",
          data: employees.map((employees: any) => {
            return {
                id: employees.id,
                nombre: employees.nombre,
                apPaterno: employees.apPaterno,
                apMaterno: employees.apMaterno,
                edad: employees.edad,
                celular: employees.celular,
                rol: employees.rol
            };
          }),
        });
      }else{
        res.status(400).send({
          status: "error",
          message: "Ha ocurrido un problema al obtener los datos",
        });
    }
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ha ocurrido un error, sin contenido",
        message: error,
      });
    }
  }
}