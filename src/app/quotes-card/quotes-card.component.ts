import { Component, OnInit } from '@angular/core';
import { Quotes} from '../quotes';
@Component({
  selector: 'app-quotes-card',
  templateUrl: './quotes-card.component.html',
  styleUrls: ['./quotes-card.component.css']
})
export class QuotesCardComponent implements OnInit {
  quotes: Quotes[] = [
    new Quotes(1, 'Alvynah', 'Challenges', 'The greatest glory in living lies not in never falling, but in rising every time we fall.', 'Nelson Mandela', new Date(2019, 3, 23), 0, 0),
    // tslint:disable-next-line:max-line-length
    new Quotes(2, 'Alvynah', 'Work', 'The way to get started is to quit talking and begin doing', 'Walt Disney', new Date(2020, 6, 30), 0, 0),
    new Quotes(3, 'Alvynah', 'Life', 'Live, Laugh, Love', 'Alvynah Wabwoba', new Date(2021, 2, 28), 0, 0),
  ];
  // tslint:disable-next-line:typedef
  addNewQuote(quote: Quotes) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.dateCreated = new Date(quote.dateCreated);
    this.quotes.push(quote);
  }

  // tslint:disable-next-line:typedef
  quoteDelete(isDone: boolean, index: number){
    if (isDone) {
      const toDeleteQuote = confirm('Are you sure you want to delete?');
      if (toDeleteQuote){
      this.quotes.splice(index, 1);

    }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
