import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[inputFormat]',
  standalone: true
})
export class InputFormatDirective {
  @Output() formatted = new EventEmitter<void>();

  @HostListener('blur') onBlur() {
    // Emit an event instead of changing the value
    this.formatted.emit();
  }
}