import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionmascotaComponent } from './modificacionmascota.component';

describe('ModificacionmascotaComponent', () => {
  let component: ModificacionmascotaComponent;
  let fixture: ComponentFixture<ModificacionmascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificacionmascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificacionmascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
