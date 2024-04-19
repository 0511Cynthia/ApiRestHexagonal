import { query } from "../../../database/database";
import { Employee } from "../../domain/entity/Employee";
import { EmployeeRepository } from "../../domain/interface/EmployeeRepository";

export class MySqlEmployeeRepository implements EmployeeRepository {
  async getAll(): Promise<Employee[] | null> {
    const sql = "SELECT * FROM gimnasio.empleados";
    try {
      const [data]: any = await query(sql, []);
      const Employees = Object.values(JSON.parse(JSON.stringify(data)));
      console.log(Employees);//Verificar que obtiene de la consulta
      return Employees.map((employee: any) =>
        new Employee(
            employee.id,
            employee.nombre,
            employee.apPaterno,
            employee.apMaterno,
            employee.edad,
            employee.celular,
            employee.rol
          )
      );
    } catch (error) {
        console.log(error);
        return null;
    }
  }

  async createEmployee(
    nombre: string,
    apPaterno: string,
    apMaterno: string,
    edad: number,
    celular: string,
    rol: string
  ): Promise<Employee | null> {
    const sql = "INSERT INTO gimnasio.empleados (nombre,apPaterno,apMaterno,edad,celular,rol) VALUES (?, ?, ?, ?, ?, ?)";
    const params: any[] = [nombre, apPaterno, apMaterno, edad, celular, rol];
    try {
      const [result]: any = await query(sql, params);
      return new Employee(result.insertId, nombre, apPaterno, apMaterno, edad, celular, rol);
    } catch (error) {
        console.log(error);
        return null;
    }
  }

  async deleteEmployee(celular: string): Promise<boolean | null> {
      const sql = "DELETE FROM empleados WHERE celular = ?";
      const params: any[] = [celular];

      try {
        const [result]: any = await query(sql, params);
        return result.affectedRows > 0;
      } catch (error) {
        console.log(error);
        return null
      }
  }
}