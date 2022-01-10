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
      'python-training-course':0,
      'data-science-training-course-in-delhincr':1,
      'machine-learning-training-course-in-delhincr':2,
      'deep-learning-training-course-in-delhincr':3,
      'artificial-inteligence-training-course-in-delhincr':4,
      'diploma-in-data-science-course-in-delhincr':5,
      'diploma-in-machine-learning-course-in-delhincr':6,
      'masters-in-data-science-course-in-delhincr':7,
      'masters-in-machine-learning-course-in-delhincr':8,
      'seo-course-in-delhincr':9,
      'rpa-course-in-delhincr':10,
      'java-course-in-delhincr':11,
      '.net-course-in-delhincr':12,
      'vba-course-in-delhincr':13,
      'php-course-in-delhincr':14,
      'html5-css3-js-course-in-delhincr':15,
      'angular-course-in-delhincr':16,
      'nodejs-course-in-delhincr':17,
      'react-course-in-delhincr':18,
      'pyhton-django-course-in-delhincr':19,
      'mongodb-course-in-delhincr':20,
      'sql-course-in-delhincr':21,
      'oracle-course-in-delhincr':22,
      'powerBi-course-in-delhincr':23,
      'tableau-course-in-delhincr':24,
      'social-media-optimization-course-in-delhincr':25,
      'pay-per-click-course-in-delhincr':26,
      'google-ads-certification-course-in-delhincr':27,
      'facebook_ads_certification-course-in-delhincr':28,
      'social-media-promotion-course-in-delhincr':29,
      'email-marketing-course-in-delhincr':30,
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
