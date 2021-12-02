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

 
courseFeatures = [
  {img:'fas fa-laptop-code',name:'Hands-On exposer to code'},
  {img:'fas fa-file-certificate',name:'Certification Program'},
  {img:'fas fa-user-headset',name:'Connect with our Experts'},
  {img:'fas fa-atlas',name:'orientation program'},
  {img:'fas fa-sign-in-alt',name:'Lifetime Access'},
  {img:'fas fa-hands-helping',name:'Carrer guiedlines'},
]




sections = [
  {id:0, img:"fas fa-laptop-code",sectionName:'Introduction of Python ',about:[ 
    {name:'Name1a',summary:'this is summry of name1aLorem ipsum dolor sit amet consectetur adipisicing elit. Amet velit consequuntur, quam culpa at in eveniet ratione, autem, unde minus soluta porro voluptas eius nulla praesentium itaque! Officia, nobis possimus?'},
    {name:'Name1b',summary:'this is summry of name1bLorem ipsum dolor sit amet consectetur adipisicing elit. Amet velit consequuntur, quam culpa at in eveniet ratione, autem, unde minus soluta porro voluptas eius nulla praesentium itaque! Officia, nobis possimus?'},
    {name:'Name1c',summary:'this is summry of name1cLorem ipsum dolor sit amet consectetur adipisicing elit. Amet velit consequuntur, quam culpa at in eveniet ratione, autem, unde minus soluta porro voluptas eius nulla praesentium itaque! Officia, nobis possimus?'},
    {name:'Name1c',summary:'this is summry of name1cLorem ipsum dolor sit amet consectetur adipisicing elit. Amet velit consequuntur, quam culpa at in eveniet ratione, autem, unde minus soluta porro voluptas eius nulla praesentium itaque! Officia, nobis possimus?'},
    {name:'Name1c',summary:'this is summry of name1cLorem ipsum dolor sit amet consectetur adipisicing elit. Amet velit consequuntur, quam culpa at in eveniet ratione, autem, unde minus soluta porro voluptas eius nulla praesentium itaque! Officia, nobis possimus?'},
    {name:'Name1c',summary:'this is summry of name1cLorem ipsum dolor sit amet consectetur adipisicing elit. Amet velit consequuntur, quam culpa at in eveniet ratione, autem, unde minus soluta porro voluptas eius nulla praesentium itaque! Officia, nobis possimus?'},
    {name:'Name1c',summary:'this is summry of name1cLorem ipsum dolor sit amet consectetur adipisicing elit. Amet velit consequuntur, quam culpa at in eveniet ratione, autem, unde minus soluta porro voluptas eius nulla praesentium itaque! Officia, nobis possimus?'},
    {name:'Name1c',summary:'this is summry of name1cLorem ipsum dolor sit amet consectetur adipisicing elit. Amet velit consequuntur, quam culpa at in eveniet ratione, autem, unde minus soluta porro voluptas eius nulla praesentium itaque! Officia, nobis possimus?'},
   ]},
  {id:1, img:"fas fa-puzzle-piece",sectionName:'Data Structures & Algorithms ',about:[
    {name:'Name2a',summary:'this is summry of name2aLorem ipsum dolor sit amet consectetur adipisicing elit. Amet velit consequuntur, quam culpa at in eveniet ratione, autem, unde minus soluta porro voluptas eius nulla praesentium itaque! Officia, nobis possimus?'},
    {name:'Name2b',summary:'this is summry of name2bLorem ipsum dolor sit amet consectetur adipisicing elit. Amet velit consequuntur, quam culpa at in eveniet ratione, autem, unde minus soluta porro voluptas eius nulla praesentium itaque! Officia, nobis possimus?'},
    {name:'Name2c',summary:'this is summry of name2cLorem ipsum dolor sit amet consectetur adipisicing elit. Amet velit consequuntur, quam culpa at in eveniet ratione, autem, unde minus soluta porro voluptas eius nulla praesentium itaque! Officia, nobis possimus?'},
    {name:'Name2c',summary:'this is summry of name2cLorem ipsum dolor sit amet consectetur adipisicing elit. Amet velit consequuntur, quam culpa at in eveniet ratione, autem, unde minus soluta porro voluptas eius nulla praesentium itaque! Officia, nobis possimus?'},
    
    
  ]},
  {id:2, img:"fas fa-trophy",sectionName:'Special Features',about:[
    {name:'Name3a',summary:'this is summry of name3aLorem ipsum dolor sit amet consectetur adipisicing elit. Amet velit consequuntur, quam culpa at in eveniet ratione, autem, unde minus soluta porro voluptas eius nulla praesentium itaque! Officia, nobis possimus?'},
    {name:'Name3b',summary:'this is summry of name3bLorem ipsum dolor sit amet consectetur adipisicing elit. Amet velit consequuntur, quam culpa at in eveniet ratione, autem, unde minus soluta porro voluptas eius nulla praesentium itaque! Officia, nobis possimus?'},
    {name:'Name3c',summary:'this is summry of name3cLorem ipsum dolor sit amet consectetur adipisicing elit. Amet velit consequuntur, quam culpa at in eveniet ratione, autem, unde minus soluta porro voluptas eius nulla praesentium itaque! Officia, nobis possimus?'},
    {name:'Name3c',summary:'this is summry of name3cLorem ipsum dolor sit amet consectetur adipisicing elit. Amet velit consequuntur, quam culpa at in eveniet ratione, autem, unde minus soluta porro voluptas eius nulla praesentium itaque! Officia, nobis possimus?'},
    {name:'Name3c',summary:'this is summry of name3cLorem ipsum dolor sit amet consectetur adipisicing elit. Amet velit consequuntur, quam culpa at in eveniet ratione, autem, unde minus soluta porro voluptas eius nulla praesentium itaque! Officia, nobis possimus?'},
    {name:'Name3c',summary:'this is summry of name3cLorem ipsum dolor sit amet consectetur adipisicing elit. Amet velit consequuntur, quam culpa at in eveniet ratione, autem, unde minus soluta porro voluptas eius nulla praesentium itaque! Officia, nobis possimus?'},
  ]},
]

projectsCard = [
  {id:1,img:"fas fa-building",name:'House Price Prediction',domainName:'Real Estate',about:'In this particular project, the students are working on the data which has a few variables related to the various aspects of the property. At the end of the capstone project, students should be able to consolidate the results and suggest actions that are to be applied for the successful price prediction of real estate.'},
  {id:2,img:"fas fa-chart-line",name:'Life Insurance Sales',domainName:'Real Estate',about:'For this particular project, the students are expected to predict the bonus for a particular life insurance agent based on their performance. The students will be analysing the data of insurance with respect to a lot of different customers. Based on the various machine learning models built by the students, there will be recommendations to the insurance company.'},
  {id:3,img:"fas fa-laptop",name:'Sales Forecasting',domainName:'Real Estate',about:'In this particular project, the students are expected to predict the customer churn of an E-Commerce company. The students will build predictive models to understand the variables which are affecting the churn of customers and how to reduce the churn.'},
  {id:4,img:"fab fa-adversal",name:'Customer Churn Prediction',domainName:'Real Estate',about:'For this project, the students should analyse the historical sales data and forecast the sales of the next quarter from the domain of consumer goods appliances. This is an all India level project for which students can choose to segregate and analyze the data in a multitude of ways.'},
]

processCard = [
  {id:1,name:'Fill the application form', about:'Apply by filling a simple online application form.'},
  {id:2,name:'Interview Process', about:'Go through a screening call with the Admission Director\'s office '},
  {id:3,name:'Join program', about:'An offer letter will be rolled out to the select few candidates. Secure your seat by paying the admission fee.'},
]

blogCards = [
  {id:1,name:'What is Data Science & How Does Data Science Works?',img:'assets/images/ds.jpg'},
  {id:1,name:'What is Data Science & How Does Data Science Works?',img:'assets/images/ds.jpg'},
  {id:1,name:'What is Data Science & How Does Data Science Works?',img:'assets/images/ds.jpg'},
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
