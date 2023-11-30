import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'seeAlso' })
export class SeealsoPipe implements PipeTransform {
  transform(value: string): string {
    if (value.includes("Lexer")) {
      return "Lexer";
    }
    return value;
  }
}
