import { LogService } from "./log.service";
import { Subject } from 'rxjs-compat/Subject';

import { Injectable } from "@angular/core";

@Injectable()
export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' },
  ];
  private logService: LogService;
  charactersChanged = new Subject<void>();

  constructor(logService: LogService) {
    this.logService = logService;
  };

  getCharacters(chosenList: string) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    });
  }

  onSideChosen(charInfo: { name: string; side: string }) {
    const pos = this.characters.findIndex(
      (char) => {
        return char.name === charInfo.name;
      }
    );
    this.characters[pos].side = charInfo.side;
    this.charactersChanged.next();
    this.logService.writeLog('Changed side of ' + charInfo.name + ' to ' + charInfo.side);
  }

  addCharacter(name: string, side: string) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    })
    if (pos !== -1) {
      return;
    }
    const newChar = { name: name, side: side };
    this.characters.push(newChar);
  }
}
