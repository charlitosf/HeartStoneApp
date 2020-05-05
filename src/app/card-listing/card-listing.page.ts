import { CardService } from './../card.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Card } from '../card';

@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.page.html',
  styleUrls: ['./card-listing.page.scss'],
})
export class CardListingPage {

  CardDeckGroup: string;
  CardDeck: string;

  public cards: Card[] = [];

  constructor(private ar: ActivatedRoute, private cardService: CardService) {}

  ionViewWillEnter() {
    this.CardDeckGroup = this.ar.snapshot.paramMap.get('cardDeckGroup');
    this.CardDeck = this.ar.snapshot.paramMap.get('cardDeck');
    this.cardService.getCardByDeck(this.CardDeckGroup, this.CardDeck).subscribe(
      (cards: Card[]) => {
        this.cards = cards;
    }
   )
  }
}
