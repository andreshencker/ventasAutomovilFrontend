import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselVehiculoComponent } from './carousel-vehiculo.component';

describe('CarouselVehiculoComponent', () => {
  let component: CarouselVehiculoComponent;
  let fixture: ComponentFixture<CarouselVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
