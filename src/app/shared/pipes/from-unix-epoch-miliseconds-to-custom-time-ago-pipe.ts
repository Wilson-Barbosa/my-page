import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fromUnixEpochMilisecondsToCustomTimeAgo'
})
export class FromUnixEpochMilisecondsToCustomTimeAgoPipe implements PipeTransform {

    transform(dateInMilliseconds: number): string {

        let message: string = "";
        const timeGapSeconds: number = Math.floor((Date.now() - dateInMilliseconds) / 1000);
        console.log(timeGapSeconds);

        if(timeGapSeconds >= 0 && timeGapSeconds < 60) { // evaluate values less than 60 seconds:
            message = "(Just now)";
        } else if(timeGapSeconds >= 60 && timeGapSeconds < 3600) { // evaluate values between 1 minute and 60 minutes
            message = `(${Math.floor(timeGapSeconds / 60)} minutes ago)`;
        } else if(timeGapSeconds >= 3600 && timeGapSeconds < 86400) { // evaluate values between 1 hour and 24 hour
            message = `(${Math.floor(timeGapSeconds / 3600)} hours ago)`;
        } else if(timeGapSeconds >= 86400 && timeGapSeconds < 604800) { // evaluate values between 1 day and 7 days
            message = `(${Math.floor(timeGapSeconds / 86400)} days ago)`;
        } else if(timeGapSeconds >= 604800 && timeGapSeconds < 2419200) { // evaluate values between 1 week and 4 weeks
            message = `(${Math.floor(timeGapSeconds / 604800)} weeks ago)`;
        }

        return message;

    }

}
