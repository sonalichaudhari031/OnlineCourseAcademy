import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletComponent } from './delet.component';

describe('DeletComponent', () => {
  let component: DeletComponent;
  let fixture: ComponentFixture<DeletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletComponent]
    });
    fixture = TestBed.createComponent(DeletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
