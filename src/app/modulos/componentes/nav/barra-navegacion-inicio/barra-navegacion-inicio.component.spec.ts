import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavegacionInicioComponent } from './barra-navegacion-inicio.component';

describe('BarraNavegacionInicioComponent', () => {
  let component: BarraNavegacionInicioComponent;
  let fixture: ComponentFixture<BarraNavegacionInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraNavegacionInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraNavegacionInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
