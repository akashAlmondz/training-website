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
    {id:1, name:'Akash badola', message:'Course was complete and practical oriented, i made the right decision to join BookMyshiksha.',img:'assets/images/testimonials/akash_badola.png'},
    {id:2, name:'Sneha Sharma', message:'I will suggest everyone who is looking for ooporunity or career in Python related language must join BookMyShiksha.',img:'assets/images/testimonials/sneha_sharma.png'},
    {id:3, name:'Gopal', message:'Trainers were very well mannered and patience with the students.',img:'assets/images/testimonials/gopal.png'},
    {id:4, name:'Abhinav', message:'Thanks to My Trainers in BookMyshiksha, i m finally placed as a python developer in seaborntechnologies.',img:'assets/images/testimonials/abhinav.png'},
    {id:5, name:'Ravi', message:'Keep-up the good work BookMyShiksha',img:'assets/images/testimonials/ravi.png'},
    {id:6, name:'Varun', message:'I am glad that i chose BookMyShiksha for my further studies in Machine learning.',img:'assets/images/testimonials/varun.png'},
    {id:7, name:'Vishal', message:'I have always been a slow learner through out my career, but still my mentors kept pushing me ahead and helped me to believe in my self.',img:'assets/images/testimonials/vishal.png'},
    {id:8, name:'Shubham', message:'BookMyShiksha guided me to my career path, Thank you',img:'assets/images/auth.jpg'},
    {id:9, name:'Vishwas', message:'I was at the verge of giving up my coding career as i was never confident enough to believe that i could become a data scientist, after i heared about BookMyShikhsa from my friend i quickly enrolled for data science program and since then with my consistency and support of my trainers,i m doing really in my field. ',img:'assets/images/testimonials/vishwas.png'},
  ]

 
  
  selectedMessage = 0
  expendReviews = false
  viewMore(value) {
    this.expendReviews = value
    let elmnt = document.getElementById('card');
    elmnt.scrollIntoView({ block: "start", inline: "start"})
  }

  readMore(value){
    this.selectedMessage = value
    this.expendReviews = true
  }
 

}
