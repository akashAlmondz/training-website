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

showPopup = false
enrollNow(value){
  this.showPopup = value
}
}
