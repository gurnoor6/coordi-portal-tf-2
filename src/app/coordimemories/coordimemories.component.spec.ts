import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordimemoriesComponent } from './coordimemories.component';

describe('CoordimemoriesComponent', () => {
  let component: CoordimemoriesComponent;
  let fixture: ComponentFixture<CoordimemoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordimemoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordimemoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
