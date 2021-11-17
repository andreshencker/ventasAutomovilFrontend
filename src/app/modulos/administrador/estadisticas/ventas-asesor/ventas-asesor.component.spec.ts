import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasAsesorComponent } from './ventas-asesor.component';

describe('VentasAsesorComponent', () => {
  let component: VentasAsesorComponent;
  let fixture: ComponentFixture<VentasAsesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasAsesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
