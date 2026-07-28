import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditLabel',
  standalone: true
})
export class CreditLabelPipe implements PipeTransform {
  transform(value: number): string {
    if (!value) return '0 Credits';
    return value === 1 ? '1 Credit' : `${value} Credits`;
  }
}