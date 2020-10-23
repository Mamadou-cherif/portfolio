import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingStatComponent } from './programming-stat.component';

describe('ProgrammingStatComponent', () => {
  let component: ProgrammingStatComponent;
  let fixture: ComponentFixture<ProgrammingStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammingStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammingStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
