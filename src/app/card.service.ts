import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CardDeck } from './card/shared/card.model';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private readonly HS_API_URL='https://omgvamp-hearthstone-v1.p.rapidapi.com';
  private readonly API_KEY='d86bdbab6amsh112bf4496897e79p1d1d3djsn09808d16996c';

  private headers: HttpHeaders = new HttpHeaders({
    'X-RapidAPI-Key': this.API_KEY
  });

  constructor(private http: HttpClient) { }

  public getAllCardDecks(): Observable<CardDeck[]> {
    return this.http.get<CardDeck[]>(
      this.HS_API_URL + '/info', { headers: this.headers }
    );
  }

  public getCardByDeck(cardDeckGroup: string, cardDeck: string): Observable<Card[]> {
    return this.http.get<Card[]>(this.HS_API_URL + '/cards/' + cardDeckGroup + '/' + cardDeck, {headers: this.headers});
  }
}