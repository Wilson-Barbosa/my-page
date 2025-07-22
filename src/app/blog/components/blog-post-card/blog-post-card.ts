import { Component } from '@angular/core';
import { Card } from "../../../shared/components/card/card";
import { Header } from "../../../shared/components/header/header";

@Component({
  selector: 'app-blog-post-card',
  imports: [Card, Header],
  templateUrl: './blog-post-card.html',
  styleUrl: './blog-post-card.css'
})
export class BlogPostCard {

}
