import { Request, Response } from "express";
import { CreateEmployeeUseCase } from "../../application/methodsEmployee/CreateEmployeeUseCase";

export class CreateEmployeeController {
  constructor(readonly createEmployeeUseCase: CreateEmployeeUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    
    try {
      const employee = await this.createEmployeeUseCase.run(
        data.nombre,
        data.apPaterno,
        data.apMaterno,
        data.edad,
        data.celular,
        data.rol
      );

      if (employee){
        res.status(201).send({
          status: "success",
          data: {
            id: employee?.id,
            nombre: employee?.nombre,
            apPaterno: employee?.apPaterno,
            apMaterno: employee?.apMaterno,
            edad: employee?.edad,
            celular: employee?.celular,
            rol: employee?.rol
          },
        });
      }else{
        res.status(204).send({
          status: "error",
          data: "Empleado no agregado",
        });
      }
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ha currio un error",
        message: error,
      });
    }
  }
}