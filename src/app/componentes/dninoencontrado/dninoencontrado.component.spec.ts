import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DninoencontradoComponent } from './dninoencontrado.component';

describe('DninoencontradoComponent', () => {
  let component: DninoencontradoComponent;
  let fixture: ComponentFixture<DninoencontradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DninoencontradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DninoencontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
