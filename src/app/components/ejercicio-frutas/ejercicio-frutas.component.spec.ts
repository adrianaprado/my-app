import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioFrutasComponent } from './ejercicio-frutas.component';

describe('EjercicioFrutasComponent', () => {
  let component: EjercicioFrutasComponent;
  let fixture: ComponentFixture<EjercicioFrutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjercicioFrutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioFrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
