import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpaces',
  standalone: true
})
export class RemoveSpacesPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    // Replace dashes with spaces
    return value.replace(/-/g, ' ');
  }
}