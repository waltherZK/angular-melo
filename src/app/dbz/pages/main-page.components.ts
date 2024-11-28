import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor( private dbzService: DbzService){
    dbzService
  }

  get characters():Character[]{
    return [...this.dbzService.characters]
  }

  onDeleeCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id)
  }

  onNewCharacter (charaacter : Character): void {
    this.dbzService.addCharacter(charaacter)
  }
}
