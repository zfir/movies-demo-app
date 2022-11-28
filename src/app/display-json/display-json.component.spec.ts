import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayJSONComponent } from './display-json.component';

describe('DisplayJSONComponent', () => {
  let component: DisplayJSONComponent;
  let fixture: ComponentFixture<DisplayJSONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayJSONComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayJSONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
