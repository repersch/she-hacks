import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Materia2Component } from './materia2.component';

describe('Materia2Component', () => {
  let component: Materia2Component;
  let fixture: ComponentFixture<Materia2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Materia2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Materia2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
