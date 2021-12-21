import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  reviewCards = [
    {id:1, name:'Akash badola', message:'Course was complete and practical oriented, i made the right decision to join BookMyshiksha.',img:'assets/images/auth.jpg'},
    {id:2, name:'Himanshu yadav', message:'I will suggest everyone who is looking for ooporunity or career in Python related language must join BookMyShiksha.',img:'assets/images/auth.jpg'},
    {id:3, name:'Manshi', message:'Trainers were very well mannered and patience with the students.',img:'assets/images/auth.jpg'},
    {id:4, name:'Naveen gauniyal', message:'Thanks to My Trainers in BookMyshiksha, i m finally placed as a python developer in seaborntechnologies.',img:'assets/images/auth.jpg'},
    {id:5, name:'Vishal Yadav', message:'Keep-up the good work BookMyShiksha',img:'assets/images/auth.jpg'},
    {id:6, name:'Lalit Sharma', message:'I am glad that i chose BookMyShiksha for my further studies in Machine learning.',img:'assets/images/auth.jpg'},
    {id:7, name:'sneha sharma', message:'I have always been a slow learner through out my career, but still my mentors kept pushing me ahead and helped me to believe in my self.',img:'assets/images/auth.jpg'},
    {id:8, name:'Raghvender verma', message:'I was at the verge of giving up my coding career as i was never confident enough to believe that i could become a data scientist, after i heared about BookMyShikhsa from my friend i quickly enrolled for data science program and since then with my consistency and support of my trainers,i m doing really in my field. ',img:'assets/images/auth.jpg'},
    {id:9, name:'Shubham', message:'BookMyShiksha guided me to my career path, Thank you',img:'assets/images/auth.jpg'},
  ]

 
  
 
  expendReviews = false
  viewMore() {
    this.expendReviews = !this.expendReviews
    
  }
  viewLess(){
    this.expendReviews = false
    
  }

}
