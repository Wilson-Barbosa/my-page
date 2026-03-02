import { Component } from '@angular/core';
import { Header } from "../../../shared/components/header/header";

import { Image } from "../image/image";
import { FromUnixEpochMilisecondsToDayMonthYearPipe } from "../../../shared/pipes/from-unix-epoch-miliseconds-to-day-month-year-pipe";
import { FromUnixEpochMilisecondsToHourMinuteSecondPipe } from "../../../shared/pipes/from-unix-epoch-miliseconds-to-hour-minute-second-pipe";
import { FromUnixEpochMilisecondsToCustomTimeAgoPipe } from "../../../shared/pipes/from-unix-epoch-miliseconds-to-custom-time-ago-pipe";

@Component({
    selector: 'app-blog-post-creator',
    imports: [Header, Image, FromUnixEpochMilisecondsToDayMonthYearPipe, FromUnixEpochMilisecondsToHourMinuteSecondPipe, FromUnixEpochMilisecondsToCustomTimeAgoPipe],
    templateUrl: './blog-post-creator.html',
    styleUrl: './blog-post-creator.css'
})
export class BlogPostCreator {


}
