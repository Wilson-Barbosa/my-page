import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fromUnixEpochMilisecondsToCustomTimeAgo'
})
export class FromUnixEpochMilisecondsToCustomTimeAgoPipe implements PipeTransform {

    transform(dateInMilliseconds: number): string {

        let message: string = "";
        let time: number = 0;

        const timeGapSeconds: number = Math.floor((Date.now() - dateInMilliseconds) / 1000);

        const oneMinuteSeconds: number = 60;
        const oneHourSeconds: number = oneMinuteSeconds * 60;
        const oneDaySeconds: number = oneHourSeconds * 24;
        const oneWeekSeconds: number = oneDaySeconds * 7;
        const oneMonthSeconds: number = oneWeekSeconds * 4;
        const oneYearSeconds: number = oneMonthSeconds * 12;

        if (timeGapSeconds >= 0 && timeGapSeconds < oneMinuteSeconds) {
            message = "(Just now)";
        } else if (timeGapSeconds >= oneMinuteSeconds && timeGapSeconds < oneHourSeconds) {
            time = Math.floor(timeGapSeconds / oneMinuteSeconds);
            message = `(${time} minute${this.appendPluralSuffix(time)} ago)`;
        } else if (timeGapSeconds >= oneHourSeconds && timeGapSeconds < oneDaySeconds) {
            time = Math.floor(timeGapSeconds / oneHourSeconds);
            message = `(${time} hour${this.appendPluralSuffix(time)} ago)`;
        } else if (timeGapSeconds >= oneDaySeconds && timeGapSeconds < oneWeekSeconds) {
            time = Math.floor(timeGapSeconds / oneDaySeconds)
            message = `(${time} day${this.appendPluralSuffix(time)} ago)`;
        } else if (timeGapSeconds >= oneWeekSeconds && timeGapSeconds < oneMonthSeconds) {
            time = Math.floor(timeGapSeconds / oneWeekSeconds);
            message = `(${time} week${this.appendPluralSuffix(time)} ago)`;
        } else if (timeGapSeconds >= oneMonthSeconds && timeGapSeconds < oneYearSeconds) {
            time = Math.floor(timeGapSeconds / oneMonthSeconds);
            message = `(${time} month${this.appendPluralSuffix(time)} ago)`;
        } else {
            time = Math.floor(timeGapSeconds / oneYearSeconds);
            message = `(${time} year${this.appendPluralSuffix(time)} ago)`;
        }

        return message;

    }

    private appendPluralSuffix(time: number): string {
        return (time > 1) ? "s" : "";
    }

}
