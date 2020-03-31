import { Component, OnInit } from '@angular/core';
import { HelloToastComponent } from '../hello-toast/hello-toast.component';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-card-decks',
  templateUrl: './card-decks.page.html',
  styleUrls: ['./card-decks.page.scss'],
})
export class CardDecksPage implements OnInit {
  readonly cardDecks:string [] = ['Druid', 'Mage', 'Warrior', 'Rogue', 'Shaman'];
  toast:HelloToastComponent;
  constructor() { }

  ngOnInit() {
    this.toast = new HelloToastComponent(new ToastController());
    this.toast.presentToast("Hello world");
  }

}
