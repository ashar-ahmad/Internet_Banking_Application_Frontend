import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomineelistComponent } from './nomineelist.component';

describe('NomineelistComponent', () => {
  let component: NomineelistComponent;
  let fixture: ComponentFixture<NomineelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomineelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NomineelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
