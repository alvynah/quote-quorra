import { Component, OnInit } from '@angular/core';
import { Quotes} from '../quotes';
@Component({
  selector: 'app-quotes-card',
  templateUrl: './quotes-card.component.html',
  styleUrls: ['./quotes-card.component.css']
})
export class QuotesCardComponent implements OnInit {
  quotes: Quotes[] = [
    new Quotes(1, 'Alvynah', 'Challenges', 'The greatest glory in living lies not in never falling, but in rising every time we fall.', 'Nelson Mandela', new Date(2019, 3, 23), 0, 0, false),
    // tslint:disable-next-line:max-line-length
    new Quotes(2, 'Alvynah', 'Work', 'The way to get started is to quit talking and begin doing', 'Walt Disney', new Date(2020, 6, 30), 0, 0, false),
    new Quotes(3, 'Alvynah', 'Life', 'Live, Laugh, Love', 'Alvynah Wabwoba', new Date(2021, 2, 28), 0, 0, false),
  ];
  sortQuotes(quote: Quotes) {

   const maxLikes = Math.max(quote.likes);
   console.log(maxLikes);
   return maxLikes;
 }

  getQuotes() {
    return this.quotes;
  }
  // tslint:disable-next-line:typedef
  addNewQuote(quote: Quotes) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.dateCreated = new Date(quote.dateCreated);
    this.quotes.push(quote);
  }
  upVote() {
   this.rankQuotes(); 
  }
  rankQuotes(): void {
    let upvoted: number = Math.max.apply(Math, this.getQuotes().map(function (chosen) { return chosen.likes; }));
    if (upvoted > 0) {
      let upvotedQuote: any = this.getQuotes().find(function (selected) { return selected.likes == upvoted; });
      let favIndex: number = this.getQuotes().indexOf(upvotedQuote);
      this.getQuotes().map((quote) => {
        if (favIndex === this.getQuotes().indexOf(quote)) {
          this.quotes[favIndex].isFavorite = true;
          console.log(favIndex);
        } else {
          quote.isFavorite = false;
        }
      });
    }
  }

  // tslint:disable-next-line:typedef
  quoteDelete(isDone: boolean, index: number){
    if (isDone) {
      const toDeleteQuote = confirm('Are you sure you want to delete?');
      if (toDeleteQuote){
      this.quotes.splice(index, 1);

    }
    }
    this.rankQuotes();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
