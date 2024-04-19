export class Employee {
    constructor(
      readonly id: number,
      readonly nombre: string,
      readonly apPaterno: string,
      readonly apMaterno: string,
      readonly edad: number,
      readonly celular: string,
      readonly rol: string
    ) {}
}