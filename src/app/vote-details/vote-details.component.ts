import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote-details',
  templateUrl: './vote-details.component.html',
  styleUrls: ['./vote-details.component.css']
})
export class VoteDetailsComponent implements OnInit {
@Output() isDone = new EventEmitter<boolean>();

// tslint:disable-next-line:typedef
quoteDelete(complete: boolean){
  this.isDone.emit(complete);
}

  constructor() { }

  ngOnInit(): void {
  }

}
