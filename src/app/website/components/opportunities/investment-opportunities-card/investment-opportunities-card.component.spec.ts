import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentOpportunitiesCardComponent } from './investment-opportunities-card.component';

describe('InvestmentOpportunitiesCardComponent', () => {
  let component: InvestmentOpportunitiesCardComponent;
  let fixture: ComponentFixture<InvestmentOpportunitiesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestmentOpportunitiesCardComponent]
    });
    fixture = TestBed.createComponent(InvestmentOpportunitiesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
