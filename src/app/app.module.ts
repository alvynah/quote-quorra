import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuotesCardComponent } from './quotes-card/quotes-card.component';
import { VoteDetailsComponent } from './vote-details/vote-details.component';
import { DateCountPipe } from './date-count.pipe';
import { HighlightPopularDirective } from './highlight-popular.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteFormComponent,
    QuotesCardComponent,
    VoteDetailsComponent,
    DateCountPipe,
    HighlightPopularDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
