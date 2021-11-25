import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  blogCards = [
    {id:1,name:'What is Data Science & How Does Data Science Works?',img:'assets/images/ds.jpg'},
    {id:1,name:'What is Data Science & How Does Data Science Works?',img:'assets/images/ds.jpg'},
    {id:1,name:'What is Data Science & How Does Data Science Works?',img:'assets/images/ds.jpg'},
  ]
}
