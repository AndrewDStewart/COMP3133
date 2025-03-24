import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputFormatDirective } from '../input-format.directive';

@Component({
  selector: 'app-format-input',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputFormatDirective
  ],
  templateUrl: './format-input.component.html',
  styleUrls: ['./format-input.component.css']
})
export class FormatInputComponent {
  inputText = '';
  transformedText = ''; // Add this to store the uppercase version
  
  // Add this method to update the transformed text
  updateTransformedText() {
    this.transformedText = this.inputText.toUpperCase();
  }
}