import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeSummaryComponent } from './commande-summary.component';

describe('CommandeSummaryComponent', () => {
  let component: CommandeSummaryComponent;
  let fixture: ComponentFixture<CommandeSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandeSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
