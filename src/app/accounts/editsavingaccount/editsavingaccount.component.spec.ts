import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsavingaccountComponent } from './editsavingaccount.component';

describe('EditsavingaccountComponent', () => {
  let component: EditsavingaccountComponent;
  let fixture: ComponentFixture<EditsavingaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsavingaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsavingaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
