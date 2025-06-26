import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent {
  @Input() label!: string;
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() control!: FormControl;
}
