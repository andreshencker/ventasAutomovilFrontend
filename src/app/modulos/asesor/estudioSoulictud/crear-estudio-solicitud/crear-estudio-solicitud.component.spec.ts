import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEstudioSolicitudComponent } from './crear-estudio-solicitud.component';

describe('CrearEstudioSolicitudComponent', () => {
  let component: CrearEstudioSolicitudComponent;
  let fixture: ComponentFixture<CrearEstudioSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEstudioSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEstudioSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
