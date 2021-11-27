import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavClientesComponent } from './nav-clientes.component';

describe('NavClientesComponent', () => {
  let component: NavClientesComponent;
  let fixture: ComponentFixture<NavClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
