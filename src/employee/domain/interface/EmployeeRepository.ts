import { Employee } from "../entity/Employee";

export interface EmployeeRepository {
  getAll(): Promise<Employee[] | null>;
  createEmployee(
    nombre: string,
    apPaterno: string,
    apMaterno: string,
    edad: number,
    celular: string,
    rol: string
  ): Promise<Employee | null>;
  deleteEmployee(celular: string): Promise<boolean | null>;
}