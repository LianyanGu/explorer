import {Component, Input, OnInit} from '@angular/core';
import {ReviewsService} from './reviews.service';
import {ReviewView} from '../../models/ReviewView';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @Input() displayReviews: boolean;
  @Input() businessId: string;
  reviews: ReviewView[];


  constructor(private reviewsService: ReviewsService) {
  }

  ngOnInit() {
    this.reviewsService.getReviewByBusinessId(this.businessId)
      .subscribe(
        (response) => {
          this.reviews = response;
        }
      );
  }




  // getReviewByBusinessId(businessId: string) {
  //   this.reviewsService.getReviewByBusinessId(this.businessId)
  //     .subscribe(
  //       (response) => {
  //         this.reviewLoaded = true;
  //         this.reviews = response;
  //       },
  //       (error) => console.log(error)
  //     );
  // }

}
