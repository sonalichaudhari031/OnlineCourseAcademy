import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDataComponent } from './courses-data.component';

describe('CoursesDataComponent', () => {
  let component: CoursesDataComponent;
  let fixture: ComponentFixture<CoursesDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesDataComponent]
    });
    fixture = TestBed.createComponent(CoursesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
