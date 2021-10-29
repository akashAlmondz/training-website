import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  landingCards = [
    {name:'Online Courses',icon:'fas fa-globe-americas'},
    {name:'Our Library',icon:'fas fa-book'},
    {name:'Our teachers',icon:'fas fa-chalkboard-teacher'}
  ]

  report = [
    {name:'Satisfied Learners',value:'61,640',icon:'far fa-user'},
    {name:'Hours Classes',value:'250,000+',icon:'far fa-clock'},
    {name:'Assignments',value:'25,000+',icon:'far fa-file-code'},
    {name:'Projects',value:'3500+',icon:'fas fa-edit'},
  ]

  list = [
    'Python','RPA', 'Data science', 'Machine Learning', 'Deep Learning', 'Artificial Intelligence', 'Angular', 'PHP','Node JS', 'React', 'MongoDB', 'SQL', 'Oracle', 'PowerBi', 'Tableau','VBA', 'SEO', 'SMO', 'PPC', 'Google Ads', 'Facebook Ads', 'E-mail marketing', 'Social Media Promotion' 
  ]

  coursesCards = [
    {name:'Python',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/python.svg',authImg:'assets/images/auth.jpg'},
    {name:'Data Science',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/data-science.svg',authImg:'assets/images/auth.jpg'},
    {name:'Machine Learning',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/machine-learning.png',authImg:'assets/images/auth.jpg'},
    {name:'Deep learning',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/deep-learning.png',authImg:'assets/images/auth.jpg'},
    {name:'Artificial Intelligence',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/artificial-intelligence.png',authImg:'assets/images/auth.jpg'},
    {name:'RPA',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/robotics.png',authImg:'assets/images/auth.jpg'},
    {name:'Java',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/java.png',authImg:'assets/images/auth.jpg'},
    {name:'.Net',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/website.png',authImg:'assets/images/auth.jpg'},
    {name:'PHP',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/php.png',authImg:'assets/images/auth.jpg'},
    {name:'HTML5/CSS3/JS',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/html.png',authImg:'assets/images/auth.jpg'},
    {name:'Angular',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/angular.svg',authImg:'assets/images/auth.jpg'},
    {name:'NodeJs',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/nodejs.svg',authImg:'assets/images/auth.jpg'},
    {name:'React',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/react.svg',authImg:'assets/images/auth.jpg'},
    {name:'Python Django',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/django.svg',authImg:'assets/images/auth.jpg'},
    {name:'MondoDB',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/mongodb.svg',authImg:'assets/images/auth.jpg'},
    {name:'SQL',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/sql-server.png',authImg:'assets/images/auth.jpg'},
    {name:'PowerBi',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/powerbi-logo.png',authImg:'assets/images/auth.jpg'},
    {name:'Tableau',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/tableau-logo.png',authImg:'assets/images/auth.jpg'},
    {name:'Oracle',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/oracle.png',authImg:'assets/images/auth.jpg'},
    {name:'Oracle',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/oracle.png',authImg:'assets/images/auth.jpg'},
  ]

  servicesCards = [
    {img:'assets/images/earth-globe.svg',name:'Online Training',about:'In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.'},
    {img:'assets/images/exam.svg',name:'Classroom Training',about:'In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.'},
    {img:'assets/images/books.svg',name:'Scholarship Programs',about:'In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.'},
    {img:'assets/images/professor.svg',name:'Resume Building',about:'In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.'},
    {img:'assets/images/blackboard.svg',name:'Placement Support',about:'In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.'},
    {img:'assets/images/books.svg',name:'Practical Approach',about:'In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.'},
    {img:'assets/images/mortarboard.svg',name:'Interview Prepration',about:'In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.'},
    {img:'assets/images/earth-globe.svg',name:'Career Guideline',about:'In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.'},
  ]

  reviewCards = [
    {id:1, name:'James Cooper', message:'In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.',img:'assets/images/auth.jpg'},
    {id:2, name:'James Cooper', message:'In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.',img:'assets/images/auth.jpg'},
    {id:3, name:'James Cooper', message:'In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.',img:'assets/images/auth.jpg'},
    {id:4, name:'James Cooper', message:'In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.',img:'assets/images/auth.jpg'},
    {id:5, name:'James Cooper', message:'In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.',img:'assets/images/auth.jpg'},
    {id:6, name:'James Cooper', message:'In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.',img:'assets/images/auth.jpg'},
    {id:7, name:'James Cooper', message:'In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.',img:'assets/images/auth.jpg'},
    {id:8, name:'James Cooper', message:'In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.',img:'assets/images/auth.jpg'},
    {id:9, name:'James Cooper', message:'In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.',img:'assets/images/auth.jpg'},
  ]

  upcomingCourses = [
    {date:'07',month:'December',name:'Python',about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequuntur, praesentium delectus voluptatum dolorem eligendi labore sunt fuga pariatur modi, beatae, culpa tempora. Accusamus in doloremque rerum corrupti voluptate consequatur?'},
    {date:'09',month:'January',name:'Machine learning',about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequuntur, praesentium delectus voluptatum dolorem eligendi labore sunt fuga pariatur modi, beatae, culpa tempora. Accusamus in doloremque rerum corrupti voluptate consequatur?'},
    {date:'30',month:'Feburary',name:'Deep Learning',about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequuntur, praesentium delectus voluptatum dolorem eligendi labore sunt fuga pariatur modi, beatae, culpa tempora. Accusamus in doloremque rerum corrupti voluptate consequatur?'},
    {date:'07',month:'March',name:'Web Development',about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequuntur, praesentium delectus voluptatum dolorem eligendi labore sunt fuga pariatur modi, beatae, culpa tempora. Accusamus in doloremque rerum corrupti voluptate consequatur?'},

  ]

  ngOnInit(): void {
  }

  expendCourses = false
  viewMoreCourses(){
    this.expendCourses = !this.expendCourses
  }



  selectedMessage = 0
  readMore(id: any) {
    this.selectedMessage=id
  }
  readLess(){
    this.selectedMessage = 0
  }
 
  expendReviews = false
  viewMore() {
    this.expendReviews = !this.expendReviews
    this.selectedMessage = 0
  }
  viewLess(){
    this.expendReviews = false
    this.selectedMessage = 0
  }

}
