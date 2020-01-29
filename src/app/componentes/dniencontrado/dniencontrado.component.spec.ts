import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DniencontradoComponent } from './dniencontrado.component';

describe('DniencontradoComponent', () => {
  let component: DniencontradoComponent;
  let fixture: ComponentFixture<DniencontradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DniencontradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DniencontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
