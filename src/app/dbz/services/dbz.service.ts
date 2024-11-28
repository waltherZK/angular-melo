import { Injectable } from '@angular/core';


import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public  uniqueId: string = '';
  public characters: Character[] = [{
    id: this.ramdomID(),
    name: 'krillin',
    power: 1000
  }, {
    id: this.ramdomID(),
    name: 'Goku',
    power: 9500
  }, {
    id: this.ramdomID(),
    name: 'Vegeta',
    power: 7500
  }]

  addCharacter(character: Character): void {
    const newCharacter: Character = {id: this.ramdomID(), ...character}
    this.characters.push(newCharacter)
  }

  // onDeleteCharacter(id: number): void {
  //   this.characters.splice(id, 1)
  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character=> character.id !== id)
  }

  ramdomID (){
    const  id = crypto.randomUUID()
    return id
  }
}
