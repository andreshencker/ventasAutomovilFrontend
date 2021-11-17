import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEstudioSolicitudComponent } from './eliminar-estudio-solicitud.component';

describe('EliminarEstudioSolicitudComponent', () => {
  let component: EliminarEstudioSolicitudComponent;
  let fixture: ComponentFixture<EliminarEstudioSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarEstudioSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarEstudioSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
