import { CardService } from './../card.service';
import { CardDeck } from './../card/shared/card.model';
import { Component } from '@angular/core';
import { HelloToastComponent } from '../hello-toast/hello-toast.component';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-card-decks',
  templateUrl: './card-decks.page.html',
  styleUrls: ['./card-decks.page.scss'],
  providers: [CardService]
})
export class CardDecksPage /*implements OnInit*/ {
  //readonly cardDecks:string [] = ['Druid', 'Mage', 'Warrior', 'Rogue', 'Shaman'];
  public cardDecks: CardDeck [] = [];
  private readonly ALLOWED_DECKS = ['classes', 'factions', 'qualities', 'types', 'races'];

  toast:HelloToastComponent;
  constructor(private cardSrv: CardService) {
    this.getCardDecks();
  }

  ngOnInit() {
    this.toast = new HelloToastComponent(new ToastController());
    this.toast.presentToast("Hello world");
  }


  private extractAllowedDecks (cardDecks: CardDeck[]) {
    this.ALLOWED_DECKS.forEach((deckName: string) => {
      this.cardDecks.push({name:deckName, types:cardDecks[deckName]})
    })
  }

  private getCardDecks() {
    this.cardSrv.getAllCardDecks().subscribe(
      (cdSrv:CardDeck[]) => {
        this.extractAllowedDecks(cdSrv);
      }
    )
  }
}
