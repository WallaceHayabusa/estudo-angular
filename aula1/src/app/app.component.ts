import { Component } from '@angular/core';

import { Animal } from "./interfaces/animal.interface";
import { Cachorro } from "./model/cachorro";
import { Gato } from "./model/gato";
import { GatoPreto } from "./model/gato-preto";
import { GenericTest } from "./generics/converte-objeto";
import { Bicicleta } from "./model/bicicleta";
import { Carro } from "./model/carro";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  cachorro: Cachorro = new Cachorro();
  gato: Gato = new GatoPreto();

  animalComeu(animal: Animal): void {
    console.log(animal.comer());
  }

  corDoGato(): void {
    console.log(this.gato.cor());
  }

  testarTiposGenericos(): void {
    let numero: number = 1;
    let titulo: string = 'Título';
    let verdadeIr: boolean = true;

    let genericTest: GenericTest = new GenericTest();

    console.log(genericTest.convert<number>(numero));
    console.log(genericTest.convert<string>(titulo));
    console.log(genericTest.convert<boolean>(verdadeIr));
  }

  testarCompatibilidade(): void {
    let bicicleta: Bicicleta = new Bicicleta();
    bicicleta.roda = 'Roda 1';

    let carro: Carro = bicicleta;

    console.log(carro.roda);
  }
}
