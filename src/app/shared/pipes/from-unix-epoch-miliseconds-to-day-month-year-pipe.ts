import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fromUnixEpochMilisecondsToDayMonthYear'
})
export class FromUnixEpochMilisecondsToDayMonthYearPipe implements PipeTransform {

    private readonly ENGLISH_MONTH_ARRAY: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    transform(dateInMiliseconds: number): string {
        let date: Date = new Date(dateInMiliseconds);
        return `${this.ENGLISH_MONTH_ARRAY[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    }

}
