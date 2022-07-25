import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitOkButtonComponent } from './submit-ok-button.component';

describe('SubmitOkButtonComponent', () => {
  let component: SubmitOkButtonComponent;
  let fixture: ComponentFixture<SubmitOkButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitOkButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitOkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
