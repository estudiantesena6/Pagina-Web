import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio17 } from './ejercicio17';

describe('Ejercicio17', () => {
  let component: Ejercicio17;
  let fixture: ComponentFixture<Ejercicio17>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio17]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio17);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
