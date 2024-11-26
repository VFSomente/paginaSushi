import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpacesToHyphen',
  standalone: true  // Tornando o Pipe standalone
})
export class ReplaceSpacesToHyphenPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value.replace(/\s+/g, '-').toLowerCase();  // Substitui espaços por hífens
  }
}
