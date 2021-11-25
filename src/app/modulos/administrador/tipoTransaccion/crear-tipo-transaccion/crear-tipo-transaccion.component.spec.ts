import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipoTransaccionComponent } from './crear-tipo-transaccion.component';

describe('CrearTipoTransaccionComponent', () => {
  let component: CrearTipoTransaccionComponent;
  let fixture: ComponentFixture<CrearTipoTransaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTipoTransaccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTipoTransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
