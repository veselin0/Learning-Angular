import { Injectable } from '@angular/core';

@Injectable()
export class StarWarsService {
  [x: string]: any;
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' },
  ];

  getCharacters(chosenList: string) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    });
  }

  onSideChosen(charInfo: { name: string; side: string }) {
    const pos = this.characters.findIndex((char: {name: string, side: string}) => {
      return char.name === charInfo.name;
    });
    this.characters[pos].side = charInfo.side;
  }
}
