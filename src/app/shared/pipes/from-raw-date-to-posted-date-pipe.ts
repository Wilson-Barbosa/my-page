import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe that receives a number, representing a timestamp in miliseconds
 * and converts it to a string, based upon when it was created
 */
@Pipe({
    name: 'fromRawDateToPostedDate'
})
export class FromRawDateToPostedDatePipe implements PipeTransform {

    transform(value: number): string {
        return "Ha 1 mes";
    }

}
