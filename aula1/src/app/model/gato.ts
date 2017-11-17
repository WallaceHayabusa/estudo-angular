import { Animal } from "../interfaces/animal.interface";

export abstract class Gato implements Animal {

    comer(): string {
        return 'Gato comeu';
    }

    abstract cor(): string;
}