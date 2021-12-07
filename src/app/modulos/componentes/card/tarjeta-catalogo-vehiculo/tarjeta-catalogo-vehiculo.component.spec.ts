import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCatalogoVehiculoComponent } from './tarjeta-catalogo-vehiculo.component';

describe('TarjetaCatalogoVehiculoComponent', () => {
  let component: TarjetaCatalogoVehiculoComponent;
  let fixture: ComponentFixture<TarjetaCatalogoVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaCatalogoVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaCatalogoVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
