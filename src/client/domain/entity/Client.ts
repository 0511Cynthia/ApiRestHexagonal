export class Client{
    constructor(
        readonly id_cliente: number,
        readonly nombre: string,
        readonly apPaterno: string,
        readonly apMaterno: string,
        readonly edad: number,
        readonly celular: string,
        readonly password: string
    ) {}
}