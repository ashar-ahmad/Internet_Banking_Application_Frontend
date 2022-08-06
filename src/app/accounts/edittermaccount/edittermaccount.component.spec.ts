import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittermaccountComponent } from './edittermaccount.component';

describe('EdittermaccountComponent', () => {
  let component: EdittermaccountComponent;
  let fixture: ComponentFixture<EdittermaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittermaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittermaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
