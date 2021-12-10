import { Component, OnInit } from '@angular/core';
import { courses } from 'src/app/courses';

@Component({
  selector: 'app-open-course',
  templateUrl: './open-course.component.html',
  styleUrls: ['./open-course.component.css']
})
export class OpenCourseComponent implements OnInit {

  constructor() { }
  courseIndex = localStorage.getItem("courseIndex")
  course = courses[Number(this.courseIndex)]
  ngOnInit(): void {

  }

  note = 'Details mentioned below is just a cover or as we say in layman language important points ,  to know the detailed curriculam you have to visit our company or download the curriculam. All the content mentioned in the website is up to date with the present technologies.' 
courseFeatures = [
  {img:'fas fa-laptop-code',name:'Hands-On exposer to code'},
  {img:'fas fa-file-certificate',name:'Certification Program'},
  {img:'fas fa-user-headset',name:'Connect with our Experts'},
  {img:'fas fa-atlas',name:'orientation program'},
  {img:'fas fa-sign-in-alt',name:'Lifetime Access'},
  {img:'fas fa-hands-helping',name:'Carrer guiedlines'},
]








processCard = [
  {id:1,name:'Fill the application form', about:'Jump start your learning journey by filling up the form'},
  {id:2,name:'Interview Process', about:'Test your skill by going through screening call with our interviewers'},
  {id:3,name:'Join program', about:'We will provide you with our traditional practical approach & when you are ready, we furthermore provide you intership.'},
]


whyUsCards = [
  {point:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum molestias perferendis necessitatibus vel iusto maxime odio possimus. Pariatur, officia repellendus.'},
  {point:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid impedit voluptas blanditiis. Fugit consequatur quam laboriosam praesentium adipisci quisquam architecto, error quidem est, vel odio illo voluptas itaque repellendus dolor!'},
  {point:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum molestias perferendis necessitatibus vel iusto maxime odio possimus. Pariatur, officia repellendus.'},
  {point:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid impedit voluptas blanditiis. Fugit consequatur quam laboriosam praesentium adipisci quisquam architecto, error quidem est, vel odio illo voluptas itaque repellendus dolor!'},
  {point:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum molestias perferendis necessitatibus vel iusto maxime odio possimus. Pariatur, officia repellendus.'},
  {point:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid impedit voluptas blanditiis. Fugit consequatur quam laboriosam praesentium adipisci quisquam architecto, error quidem est, vel odio illo voluptas itaque repellendus dolor!'},
  {point:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum molestias perferendis necessitatibus vel iusto maxime odio possimus. Pariatur, officia repellendus.'},
  {point:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid impedit voluptas blanditiis. Fugit consequatur quam laboriosam praesentium adipisci quisquam architecto, error quidem est, vel odio illo voluptas itaque repellendus dolor!'},
]
trainesrsCards = [
  {point:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum molestias perferendis necessitatibus vel iusto maxime odio possimus. Pariatur, officia repellendus.'},
  {point:'Lorem ipsum dolor sit ametnsequatur quam laboriosam praesentium adipisci quisquam architecto, error quidem est, vel odio illo voluptas itaque repellendus dolor!'},
  {point:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum molestias perferendis necessitatibus vel iusto maxime odio possimus. Pariatur, officia repellendus.'},
  {point:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid impedit voluptas blanditiis. Fugit consequatur quam laboriosam praesentium adipisci quisquam architecto, error quidem est, vel odio illo voluptas itaque repellendus dolor!'},
  {point:'Lorem ipsumlum molestias perferendis necessitatibus vel iusto maxime odio possimus. Pariatur, officia repellendus.'},
  {point:'Lorem ipsum elit. Aliquid impedit voluptas blanditiis. Fugit consequatur quam laboriosam praesentium adipisci quisquam architecto, error quidem est, vel odio illo voluptas itaque repellendus dolor!'},
  
  {point:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid impedit voluptas blanditiis. Fugit consequatur quam laboriosam praesentium adipisci quisquam architecto, error quidem est, vel odio illo voluptas itaque repellendus dolor!'},
]
placementCards = [
  {point:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum molestias perferendis necessitatibus vel iusto maxime odio possimus. Pariatur, officia repellendus.'},
  {point:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid impedit voluptas blanditiis. Fugit consequatur quam laboriosam praesentium adipisci quisquam architecto, error quidem est, vel odio illo voluptas itaque repellendus dolor!'},
  {point:'Lortias perferendis necessitatibus vel iusto maxime odio possimus. Pariatur, officia repellendus.'},
  {point:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid impedit voluptas blanditiis. Fugit consequatur quam laboriosam praesentium adipisci quisquam architecto, error quidem est, vel odio illo voluptas itaque repellendus dolor!'},
  {point:'Loconsectetur adipisicing elit. Illum molestias perferendis necessitatibus vel iusto maxime odio possimus. Pariatur, officia repellendus.'},   
]

activeSection = 0
openedCard = 0
openedCertificate = 0

active(num:any){
  this.activeSection=num
}

openCard(num:any){
  this.openedCard = num 
}

showCertificate(value:number){
  this.openedCertificate = value
}



}
