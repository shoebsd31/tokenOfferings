import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenOfferingDetailsComponent } from './token-offering-details.component';

describe('TokenOfferingDetailsComponent', () => {
  let component: TokenOfferingDetailsComponent;
  let fixture: ComponentFixture<TokenOfferingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenOfferingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenOfferingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
