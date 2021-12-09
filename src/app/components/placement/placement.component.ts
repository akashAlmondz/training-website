import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.css']
})

export class PlacementComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
cards = [
  {
    name:'Akash Badola', company: 'Almondz Global Securities', profile:'Full Stack Developer', img: 'assets/images/auth.jpg'
  },
  {
    name:'Akash Badola', company: 'Almondz Global Securities', profile:'Full Stack Developer', img: 'assets/images/auth.jpg'
  },
  {
    name:'Akash Badola', company: 'Almondz Global Securities', profile:'Full Stack Developer', img: 'assets/images/auth.jpg'
  },
  {
    name:'Akash Badola', company: 'Almondz Global Securities', profile:'Full Stack Developer', img: 'assets/images/auth.jpg'
  },
  {
    name:'Akash Badola', company: 'Almondz Global Securities', profile:'Full Stack Developer', img: 'assets/images/auth.jpg'
  },
  {
    name:'Akash Badola', company: 'Almondz Global Securities', profile:'Full Stack Developer', img: 'assets/images/auth.jpg'
  },
  {
    name:'Akash Badola', company: 'Almondz Global Securities', profile:'Full Stack Developer', img: 'assets/images/auth.jpg'
  },
  {
    name:'Akash Badola', company: 'Almondz Global Securities', profile:'Full Stack Developer', img: 'assets/images/auth.jpg'
  },
  {
    name:'Akash Badola', company: 'Almondz Global Securities', profile:'Full Stack Developer', img: 'assets/images/auth.jpg'
  },
  {
    name:'Akash Badola', company: 'Almondz Global Securities', profile:'Full Stack Developer', img: 'assets/images/auth.jpg'
  },
  {
    name:'Akash Badola', company: 'Almondz Global Securities', profile:'Full Stack Developer', img: 'assets/images/auth.jpg'
  },
  {
    name:'Akash Badola', company: 'Almondz Global Securities', profile:'Full Stack Developer', img: 'assets/images/auth.jpg'
  },
]

buttonValue = 'View More'
button:any
heading:any
viewMore(){
  this.button = document.getElementById('buttonHolder');
  this.heading = document.getElementById('heading');
  if (this.buttonValue == 'View More'){
    this.buttonValue= 'View Less'
    this.button.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
  });
  }else if (this.buttonValue == 'View Less') {
    
    this.buttonValue = 'View More'
    this.heading.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
  })
  }
  
  
}

 



}
