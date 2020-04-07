import { CardDeck } from './../models/card-deck';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.scss'],
})
export class CardDeckComponent implements OnInit {

  myCardDeck: CardDeck;

  //@Output() clicked = new EventEmitter<string>();

  clicado: boolean = false;

  constructor() { }

  ngOnInit() {}

  click() {
    this.clicado = !this.clicado;

    //this.clicked.emit(this.myCardDeck.name);
  }

}
