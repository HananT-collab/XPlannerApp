import { Component } from '@angular/core';

@Component({
  selector: 'x-editable-accordion',
  standalone: true,
  imports: [],
  templateUrl: './editable-accordion.component.html',
  styleUrl: './editable-accordion.component.scss'
})
export class EditableAccordionComponent {
  headerText: string = 'Editable Header';
  isEditing: boolean = false;

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }
}
