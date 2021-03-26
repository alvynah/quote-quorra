import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesCardComponent } from './quotes-card.component';

describe('QuotesCardComponent', () => {
  let component: QuotesCardComponent;
  let fixture: ComponentFixture<QuotesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
