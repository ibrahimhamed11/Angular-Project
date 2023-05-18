import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  @Input() rating: number;
  @Input() stars: number[];

  constructor() {
    this.stars = [1, 2, 3, 4, 5]; // Default number of stars
    this.rating=0;

  }
}
