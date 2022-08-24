import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  characters: string[] = [];
  chosenList = 'all';

  constructor() {}

  ngOnInit(): void {}

  onChoose(side: string) {
    this.chosenList = side;
  }

  getCharacters() {

  };

  onSideChosen(charInfo: { name: string; side: string }) {
    const pos = this.characters.findIndex((char: string) => {
      // return char.name === charInfo.name;
    });
    // this.characters[pos].side = charInfo.side;
  }
}
