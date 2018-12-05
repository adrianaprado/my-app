import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFrutasDetalleComponent } from './crud-frutas-detalle.component';

describe('CrudFrutasDetalleComponent', () => {
  let component: CrudFrutasDetalleComponent;
  let fixture: ComponentFixture<CrudFrutasDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudFrutasDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudFrutasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
