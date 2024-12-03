import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableAccordionComponent } from './editable-accordion.component';

describe('EditableAccordionComponent', () => {
  let component: EditableAccordionComponent;
  let fixture: ComponentFixture<EditableAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditableAccordionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditableAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
