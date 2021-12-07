import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajetaFotoVehiculoComponent } from './trajeta-foto-vehiculo.component';

describe('TrajetaFotoVehiculoComponent', () => {
  let component: TrajetaFotoVehiculoComponent;
  let fixture: ComponentFixture<TrajetaFotoVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrajetaFotoVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajetaFotoVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
