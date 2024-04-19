export interface EncriptService{
    encriptPassword(
        password: string
    ): string;
    authPassword(
        word: string,
        password:string
    ): boolean;
}