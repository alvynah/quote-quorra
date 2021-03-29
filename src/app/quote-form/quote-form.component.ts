import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Quotes} from '../quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
newQuote = new Quotes(0, '', '', '', '', new Date(), 0, 0,false);
@Output() addQuote = new EventEmitter<Quotes>();
// tslint:disable-next-line:typedef
submitQuote(){

  this.addQuote.emit(this.newQuote);
  console.log(this.newQuote);
  this.newQuote = new Quotes(0, '', '', '', '', new Date(), 0, 0,false);

}
  constructor() { }

  ngOnInit(): void {
  }

}
