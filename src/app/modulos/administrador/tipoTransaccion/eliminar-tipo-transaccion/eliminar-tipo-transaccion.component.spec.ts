import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTipoTransaccionComponent } from './eliminar-tipo-transaccion.component';

describe('EliminarTipoTransaccionComponent', () => {
  let component: EliminarTipoTransaccionComponent;
  let fixture: ComponentFixture<EliminarTipoTransaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarTipoTransaccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarTipoTransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
