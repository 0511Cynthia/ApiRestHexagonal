import { EncriptService }  from "../../application/services/EncriptService";
import * as bcrypt from 'bcrypt';

const auxSaltRounds = process.env.SALT_ROUNDS ?? "";
const saltRounds = Number(auxSaltRounds);

export class EncriptServiceHelper implements EncriptService{
    encriptPassword(password: string): string {
        const hashedPassword = bcrypt.hashSync(password, saltRounds);
        
        return hashedPassword;
    }

    authPassword(word: string, password: string): boolean {
        let authentication = bcrypt.compareSync(word, password);

        return authentication;
    }
}