import { Animal } from "../interfaces/animal.interface";

export class Cachorro implements Animal {
    
    comer(): string {
        return 'Cachorro comeu';
    }
}