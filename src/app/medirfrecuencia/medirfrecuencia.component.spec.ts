import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedirfrecuenciaComponent } from './medirfrecuencia.component';

describe('MedirfrecuenciaComponent', () => {
  let component: MedirfrecuenciaComponent;
  let fixture: ComponentFixture<MedirfrecuenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedirfrecuenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedirfrecuenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
