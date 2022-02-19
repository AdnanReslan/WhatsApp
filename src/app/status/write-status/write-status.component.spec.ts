import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteStatusComponent } from './write-status.component';

describe('WriteStatusComponent', () => {
  let component: WriteStatusComponent;
  let fixture: ComponentFixture<WriteStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
