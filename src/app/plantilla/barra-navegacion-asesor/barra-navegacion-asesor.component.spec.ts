import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavegacionAsesorComponent } from './barra-navegacion-asesor.component';

describe('BarraNavegacionAsesorComponent', () => {
  let component: BarraNavegacionAsesorComponent;
  let fixture: ComponentFixture<BarraNavegacionAsesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraNavegacionAsesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraNavegacionAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
