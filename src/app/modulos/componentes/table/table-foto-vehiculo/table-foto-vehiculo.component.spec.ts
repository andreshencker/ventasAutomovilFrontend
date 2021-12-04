import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFotoVehiculoComponent } from './table-foto-vehiculo.component';

describe('TableFotoVehiculoComponent', () => {
  let component: TableFotoVehiculoComponent;
  let fixture: ComponentFixture<TableFotoVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFotoVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFotoVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
