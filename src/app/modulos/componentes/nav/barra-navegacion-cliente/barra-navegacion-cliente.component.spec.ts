import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavegacionClienteComponent } from './barra-navegacion-cliente.component';

describe('BarraNavegacionClienteComponent', () => {
  let component: BarraNavegacionClienteComponent;
  let fixture: ComponentFixture<BarraNavegacionClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraNavegacionClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraNavegacionClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
