import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloC1Component } from './hello-c1.component';

describe('HelloC1Component', () => {
  let component: HelloC1Component;
  let fixture: ComponentFixture<HelloC1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloC1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
