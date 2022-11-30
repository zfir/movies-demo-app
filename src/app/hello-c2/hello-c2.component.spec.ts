import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloC2Component } from './hello-c2.component';

describe('HelloC2Component', () => {
  let component: HelloC2Component;
  let fixture: ComponentFixture<HelloC2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloC2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
