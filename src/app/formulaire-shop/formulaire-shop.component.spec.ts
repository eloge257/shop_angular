import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireShopComponent } from './formulaire-shop.component';

describe('FormulaireShopComponent', () => {
  let component: FormulaireShopComponent;
  let fixture: ComponentFixture<FormulaireShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
