import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { courses } from 'src/app/courses';

@Component({
  selector: 'app-open-course',
  templateUrl: './open-course.component.html',
  styleUrls: ['./open-course.component.css']
})
export class OpenCourseComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }
  course

  ngOnInit(): void {
    let indexNo = {
      Python_Training_course_DelhiNCR:0,
      Data_Science_Training_course_DelhiNCR:1,
      Machine_Learning_Training_course_DelhiNCR:2,
      Deep_Learning_Training_course_DelhiNCR:3,
      Artificial_Inteligence_Training_course_DelhiNCR:4,
      Diploma_in_DataScience_course_DelhiNCR:5,
      Diploma_in_Machine_Learning_course_DelhiNCR:6,
      Masters_in_DataScience_course_DelhiNCR:7,
      Masters_in_Machine_Learning_course_DelhiNCR:8,
      Digital_Marketing_course_DelhiNCR:9,
      RPA_course_DelhiNCR:10,
      Java_course_DelhiNCR:11,
      NET_course_DelhiNCR:12,
      VBA_course_DelhiNCR:13,
      PHP_course_DelhiNCR:14,
      HTML5_CSS3_JS_course_DelhiNCR:15,
      Angular_course_DelhiNCR:16,
      NodeJs_course_DelhiNCR:17,
      React_course_DelhiNCR:18,
      Pyhton_Django_course_DelhiNCR:19,
      MongoDB_course_DelhiNCR:20,
      SQL_course_DelhiNCR:21,
      PowerBi_course_DelhiNCR:22,
      Tableau_course_DelhiNCR:23,
      Oracle_course_DelhiNCR:24,
    }
    this.router.paramMap.subscribe((x:any) => {
      let index = indexNo[x.params.id]
      this.course = courses[index]
    })
  }

 
courseFeatures = [
  {img:'fas fa-laptop-code',name:'Hands-On exposer to code'},
  {img:'fas fa-file-certificate',name:'Certification Program'},
  {img:'fas fa-user-headset',name:'Connect with our Experts'},
  {img:'fas fa-atlas',name:'orientation program'},
  {img:'fas fa-sign-in-alt',name:'Lifetime Access'},
  {img:'fas fa-hands-helping',name:'Carrer guiedlines'},
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
