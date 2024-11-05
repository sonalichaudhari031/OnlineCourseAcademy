import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularJsComponent } from './angular-js.component';

describe('AngularJsComponent', () => {
  let component: AngularJsComponent;
  let fixture: ComponentFixture<AngularJsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularJsComponent]
    });
    fixture = TestBed.createComponent(AngularJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
