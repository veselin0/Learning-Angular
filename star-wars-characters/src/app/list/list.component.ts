import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  characters;

  constructor() { }

  ngOnInit(): void {
  }

  onSideAssigned(charInfo: { name: string; side: string; } | undefined) {
    this.sideAssigned.emit(charInfo);
  }

}
