import { Component, OnInit } from '@angular/core';
import { FromRawDateToPostedDatePipe } from "../../../shared/pipes/from-raw-date-to-posted-date-pipe";
import { Badge } from "../../../shared/components/badge/badge";
import { Header } from "../../../shared/components/header/header";

/**
 * Component for a complete post, with title, bodies
 */
@Component({
  selector: 'app-blog-post',
  imports: [FromRawDateToPostedDatePipe, Badge, Header],
  templateUrl: './blog-post.html',
  styleUrl: './blog-post.css'
})
export class BlogPost implements OnInit {

    ngOnInit(): void {

    }

}
