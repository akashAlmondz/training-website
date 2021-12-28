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
    name:'Akash sharma', company: 'Seaborntechnologies', profile:'Python developer', img: 'assets/images/placement/img1.jpeg'
  },
  {
    name:'sakshi jain', company: 'Almondz global securities', profile:'Digital marketing', img: 'assets/images/placement/img5.jpeg'
  },
  {
    name:'kaj ostam', company: 'jetdevs pvt ltd', profile:'Full Stack Developer', img: 'assets/images/placement/img10.jpeg'
  },
  {
    name:'akansha singh', company: 'Softcubical', profile:'Machine learning engineer', img: 'assets/images/placement/img6.jpeg'
  },
  {
    name:'Kuldeep singh', company: 'Seaborntechnologies', profile:'Full Stack Developer', img: 'assets/images/placement/img4.jpeg'
  },
  {
    name:'Himanshu Rawat', company: 'webinfotech', profile:'Digital Marketing', img: 'assets/images/placement/img2.jpeg'
  },
  {
    name:'Rahul kumar', company: 'css infotech pvt ltd', profile:'python developer', img: 'assets/images/placement/img7.jpeg'
  },
  {
    name:'Sanjeev kumar', company: 'seaborntechnologies', profile:'Data Analytical', img: 'assets/images/placement/img8.jpeg'
  },
  {
    name:'gunjan Singh', company: 'css infotech', profile:'Data Scientist', img: 'assets/images/placement/img9.jpeg'
  },
  {
    name:'Rihaan', company: 'Seaborntechnologies', profile:'Python Developer', img: 'assets/images/placement/img3.jpeg'
  },
  {
    name:'Rajat', company: 'Almondz Global Securities', profile:'Full Stack Developer', img: 'assets/images/placement/img11.jpeg'
  },
  {
    name:'Divanshu', company: 'webinfotech', profile:'Python Developer', img: 'assets/images/placement/img12.png'
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
