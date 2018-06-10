import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvSummaryComponent } from './rdv-summary.component';

describe('RdvSummaryComponent', () => {
  let component: RdvSummaryComponent;
  let fixture: ComponentFixture<RdvSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdvSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdvSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
