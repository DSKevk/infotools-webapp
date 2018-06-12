import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRdvDialogComponent } from './update-rdv-dialog.component';

describe('UpdateRdvDialogComponent', () => {
  let component: UpdateRdvDialogComponent;
  let fixture: ComponentFixture<UpdateRdvDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRdvDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRdvDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
