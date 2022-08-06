import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnomineeComponent } from './addnominee.component';

describe('AddnomineeComponent', () => {
  let component: AddnomineeComponent;
  let fixture: ComponentFixture<AddnomineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnomineeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnomineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
