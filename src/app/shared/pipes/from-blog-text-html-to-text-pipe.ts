import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fromBlogTextHtmlToText'
})
export class FromBlogTextHtmlToTextPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
