import { CardDeck } from './../models/card-deck';
import { Component, OnInit } from '@angular/core';
import { HelloToastComponent } from '../hello-toast/hello-toast.component';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-card-decks',
  templateUrl: './card-decks.page.html',
  styleUrls: ['./card-decks.page.scss'],
})
export class CardDecksPage implements OnInit {
  cardDecks: CardDeck [];
  toast:HelloToastComponent;

  readonly mockupFile:string = './assets/data/carddecks.json';

  constructor() { }

  ngOnInit() {
    this.toast = new HelloToastComponent(new ToastController());
    this.toast.presentToast("Hello world");
    this.getData();
  }

  public getData() {
    fetch(this.mockupFile).then(res => res.json()).then(json => {
      this.cardDecks = json;
    });
  }

  selectedCDs: string[] = [];
  
  select(name: string) {
    var esta = this.selectedCDs.indexOf(name);
    if (esta === -1) {
      this.selectedCDs.push(name);
    } else {
      this.selectedCDs.splice(esta, 1);
    }
  }

}
