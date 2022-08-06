import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiarylistComponent } from './beneficiarylist.component';

describe('BeneficiarylistComponent', () => {
  let component: BeneficiarylistComponent;
  let fixture: ComponentFixture<BeneficiarylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiarylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiarylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
