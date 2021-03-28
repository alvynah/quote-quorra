import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-vote-details',
  templateUrl: './vote-details.component.html',
  styleUrls: ['./vote-details.component.css']
})
export class VoteDetailsComponent implements OnInit {
 @Input()
  quote!: Quotes;
@Output() isDone = new EventEmitter<boolean>();

// tslint:disable-next-line:typedef
quoteDelete(complete: boolean){
  this.isDone.emit(complete);
}
// tslint:disable-next-line:typedef
upVote(){
  this.quote.likes += 1;
}
// tslint:disable-next-line:typedef
downVote(){
  this.quote.dislikes += 1;
}
  constructor() { }

  ngOnInit(): void {
  }

}
