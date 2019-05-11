import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviecatsectionComponent } from './moviecatsection.component';

describe('MoviecatsectionComponent', () => {
  let component: MoviecatsectionComponent;
  let fixture: ComponentFixture<MoviecatsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviecatsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviecatsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
