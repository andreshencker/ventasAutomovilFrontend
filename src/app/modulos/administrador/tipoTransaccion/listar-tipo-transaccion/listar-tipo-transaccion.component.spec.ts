import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoTransaccionComponent } from './listar-tipo-transaccion.component';

describe('ListarTipoTransaccionComponent', () => {
  let component: ListarTipoTransaccionComponent;
  let fixture: ComponentFixture<ListarTipoTransaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTipoTransaccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTipoTransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
