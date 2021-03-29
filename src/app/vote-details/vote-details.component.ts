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
@Output() isHighest =new EventEmitter();
@Output() Vote =new EventEmitter(); 


// tslint:disable-next-line:typedef
quoteDelete(complete: boolean){
  this.isDone.emit(complete);
}
highest(){
this.isHighest.emit();
}
// tslint:disable-next-line:typedef
upVote(voted:number){
  this.quote.likes += 1;
this.Vote.emit(voted);

}
// tslint:disable-next-line:typedef
downVote(){
  this.quote.dislikes += 1;
}

  constructor() { }

  ngOnInit(): void {
  }

}
