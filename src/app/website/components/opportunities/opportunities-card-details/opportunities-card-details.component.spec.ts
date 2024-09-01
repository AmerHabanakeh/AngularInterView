import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitiesCardDetailsComponent } from './opportunities-card-details.component';

describe('OpportunitiesCardDetailsComponent', () => {
  let component: OpportunitiesCardDetailsComponent;
  let fixture: ComponentFixture<OpportunitiesCardDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpportunitiesCardDetailsComponent]
    });
    fixture = TestBed.createComponent(OpportunitiesCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
