import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitSummaryComponent } from './produit-summary.component';

describe('ProduitSummaryComponent', () => {
  let component: ProduitSummaryComponent;
  let fixture: ComponentFixture<ProduitSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
