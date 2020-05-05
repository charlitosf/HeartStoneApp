import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  @Input() items: Array<any> = [];
  @Input() listName: string;

  @Input() navigateTo: any;

  generateURL(group: string, deck: string) {
    return "/cards/card-listing/" + group + "/" + deck;
  }
  constructor() { }

  ngOnInit() {}

}
