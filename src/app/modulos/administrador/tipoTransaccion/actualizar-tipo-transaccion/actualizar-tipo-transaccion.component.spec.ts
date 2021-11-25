import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTipoTransaccionComponent } from './actualizar-tipo-transaccion.component';

describe('ActualizarTipoTransaccionComponent', () => {
  let component: ActualizarTipoTransaccionComponent;
  let fixture: ComponentFixture<ActualizarTipoTransaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarTipoTransaccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarTipoTransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
