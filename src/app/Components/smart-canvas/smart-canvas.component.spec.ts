import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCanvasComponent } from './smart-canvas.component';

describe('SmartCanvasComponent', () => {
  let component: SmartCanvasComponent;
  let fixture: ComponentFixture<SmartCanvasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartCanvasComponent]
    });
    fixture = TestBed.createComponent(SmartCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
