import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAsignacionComponent } from './eliminar-asignacion.component';

describe('EliminarAsignacionComponent', () => {
  let component: EliminarAsignacionComponent;
  let fixture: ComponentFixture<EliminarAsignacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarAsignacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarAsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
