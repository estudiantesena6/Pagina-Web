import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio16 } from './ejercicio16';

describe('Ejercicio16', () => {
  let component: Ejercicio16;
  let fixture: ComponentFixture<Ejercicio16>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio16]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio16);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
