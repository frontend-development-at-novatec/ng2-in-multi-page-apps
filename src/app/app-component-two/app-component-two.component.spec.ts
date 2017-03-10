import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponentTwoComponent } from './app-component-two.component';

describe('AppComponentTwoComponent', () => {
  let component: AppComponentTwoComponent;
  let fixture: ComponentFixture<AppComponentTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponentTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
