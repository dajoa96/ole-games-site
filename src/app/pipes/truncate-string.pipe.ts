import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateString'
})
export class TruncateStringPipe implements PipeTransform {

  transform(text: string, length: number = 20, suffix: string = '...'): string {

    if (text.length > length) {
      // const withoutHtml = text.replace(/<(?:.|\n)*?>/gm, '');
      const truncated: string = text.substring(0, length).trim() + suffix;
      return truncated;
    }

    return text;
  }

}
