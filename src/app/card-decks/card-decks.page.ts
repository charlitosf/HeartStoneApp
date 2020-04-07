import { CardDeckComponent } from './../card-deck/card-deck.component';
import { CardDeck } from './../models/card-deck';
import { Component, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild(CardDeckComponent, {static:false})
  private cd: CardDeckComponent;

  readonly mockupFile:string = './assets/data/carddecks.json';

  constructor() { }

  ngOnInit() {
    this.toast = new HelloToastComponent(new ToastController());
    this.toast.presentToast("Hello world");
    this.getData();
  }

  selectedCDs: string[] = [];
  ngAfterViewInit() {
    var esta = this.selectedCDs.indexOf(this.cd.myCardDeck.name);
    if (esta === -1) {
      this.selectedCDs.push(this.cd.myCardDeck.name);
    } else {
      this.selectedCDs.splice(esta, 1);
    }
  }

  public getData() {
    fetch(this.mockupFile).then(res => res.json()).then(json => {
      this.cardDecks = json;
    });
  }


}
