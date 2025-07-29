import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fromUnixEpochMilisecondsToHourMinuteSecond'
})
export class FromUnixEpochMilisecondsToHourMinuteSecondPipe implements PipeTransform {

    transform(dateInMiliseconds: number): string {
        let date: Date = new Date(dateInMiliseconds);
        return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }

}
