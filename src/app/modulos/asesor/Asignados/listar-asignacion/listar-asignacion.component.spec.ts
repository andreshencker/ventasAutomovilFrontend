import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAsignacionComponent } from './listar-asignacion.component';

describe('ListarAsignacionComponent', () => {
  let component: ListarAsignacionComponent;
  let fixture: ComponentFixture<ListarAsignacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAsignacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
