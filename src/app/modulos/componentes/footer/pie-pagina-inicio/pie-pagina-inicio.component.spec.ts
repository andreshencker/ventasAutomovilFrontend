import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiePaginaInicioComponent } from './pie-pagina-inicio.component';

describe('PiePaginaInicioComponent', () => {
  let component: PiePaginaInicioComponent;
  let fixture: ComponentFixture<PiePaginaInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiePaginaInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiePaginaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
