import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  constructor() { }
  slides = [
    {'image': '/assets/images/offers3.png'}, 
    {'image': '/assets/images/offers.png'}, 
    {'image': '/assets/images/offers2.png'},
  ];
  ngOnInit(): void {
  }

}
