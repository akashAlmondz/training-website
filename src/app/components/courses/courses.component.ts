import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }
  coursesCards = [
    {name:'Advanced Photoshop',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/photoShop.jpg',authImg:'assets/images/auth.jpg'},
    {name:'A complete guide to design',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/design.jpg',authImg:'assets/images/auth.jpg'},
    {name:'A complete guide to design',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/design.jpg',authImg:'assets/images/auth.jpg'},
    {name:'Advanced Photoshop',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/photoShop.jpg',authImg:'assets/images/auth.jpg'},
    {name:'Beginners guide to HTML',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/html.jpg',authImg:'assets/images/auth.jpg'},
    {name:'Beginners guide to HTML',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/html.jpg',authImg:'assets/images/auth.jpg'},
    {name:'Advanced Photoshop',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/photoShop.jpg',authImg:'assets/images/auth.jpg'},
    {name:'A complete guide to design',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/design.jpg',authImg:'assets/images/auth.jpg'},
    {name:'Beginners guide to HTML',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/html.jpg',authImg:'assets/images/auth.jpg'},
  ]

  ngOnInit(): void {
  }

}
