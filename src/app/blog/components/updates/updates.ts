import { Component } from '@angular/core';
import { Card } from "../../../shared/components/card/card";
import { FromUnixEpochMilisecondsToDayMonthYearPipe } from "../../../shared/pipes/from-unix-epoch-miliseconds-to-day-month-year-pipe";
import { Header } from "../../../shared/components/header/header";
import { PText } from "../p-text/p-text";

@Component({
    selector: 'app-updates',
    imports: [Card, FromUnixEpochMilisecondsToDayMonthYearPipe, Header, PText],
    templateUrl: './updates.html',
    styleUrl: './updates.css'
})
export class Updates {

}
