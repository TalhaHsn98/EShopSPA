import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoBox } from './promo-box';

describe('PromoBox', () => {
  let component: PromoBox;
  let fixture: ComponentFixture<PromoBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromoBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
