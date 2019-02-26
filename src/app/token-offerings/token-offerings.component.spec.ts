import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenOfferingsComponent } from './token-offerings.component';

describe('TokenOfferingsComponent', () => {
  let component: TokenOfferingsComponent;
  let fixture: ComponentFixture<TokenOfferingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenOfferingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenOfferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
