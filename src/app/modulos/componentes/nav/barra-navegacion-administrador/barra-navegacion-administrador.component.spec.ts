import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavegacionAdministradorComponent } from './barra-navegacion-administrador.component';

describe('BarraNavegacionAdministradorComponent', () => {
  let component: BarraNavegacionAdministradorComponent;
  let fixture: ComponentFixture<BarraNavegacionAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraNavegacionAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraNavegacionAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
