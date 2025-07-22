import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe that receives a number, representing a timestamp in miliseconds
 * and converts it to a string, based upon when it was created
 */
@Pipe({
    name: 'fromRawDateToPostedDate'
})
export class FromRawDateToPostedDatePipe implements PipeTransform {

    private readonly ENGLISH_MONTH_ARRAY: string[] = ["Jan", "Fev", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

    transform(dateInMiliseconds: number): string {

        const timeDifferenceInSeconds: number = (Date.now() - dateInMiliseconds) * 1000;
        let returnString: string = "";

        if (timeDifferenceInSeconds < 60) {
            returnString = "Just now"
        } else if (timeDifferenceInSeconds >= 60 && timeDifferenceInSeconds < 3600) { // show in minutes
            returnString = (timeDifferenceInSeconds % 60).toString();
        } else if (timeDifferenceInSeconds >= 3600 && timeDifferenceInSeconds < 86400) { // show in hours
            returnString = (timeDifferenceInSeconds % 3600).toString();
        } else {
            returnString = this.convertFromSecondsToDayMonthYear(dateInMiliseconds) + " at " + this.convertFromSecondsToHourMinute(dateInMiliseconds);
        }

        return returnString;
    }

    private convertFromSecondsToDayMonthYear(timeSeconds: number): string {
        let date = new Date(timeSeconds);
        return `${this.ENGLISH_MONTH_ARRAY[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    }

    private convertFromSecondsToHourMinute(timeSeconds: number): string {
        let date = new Date(timeSeconds);
        return `${date.getHours()}:${date.getMinutes()}`;
    }
}
