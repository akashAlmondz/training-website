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
    {name:'Python',img:'assets/images/python.svg'},
    {name:'Data Science',img:'assets/images/data-science.svg'},
    {name:'Machine Learning',img:'assets/images/machine-learning.png'},
    {name:'Deep learning',img:'assets/images/deep-learning.png'},
    {name:'Artificial Intelligence',img:'assets/images/artificial-intelligence.png'},
    {name:'RPA',img:'assets/images/robotics.png'},
    {name:'Java',img:'assets/images/java.png'},
    {name:'.Net',img:'assets/images/website.png'},
    {name:'PHP',img:'assets/images/php.png'},
    {name:'HTML5/CSS3/JS',img:'assets/images/html.png'},
    {name:'Angular',img:'assets/images/angular.svg'},
    {name:'NodeJs',img:'assets/images/nodejs.svg'},
    {name:'React',img:'assets/images/react.svg'},
    {name:'Python Django',img:'assets/images/django.svg'},
    {name:'MondoDB',img:'assets/images/mongodb.svg'},
    {name:'SQL',img:'assets/images/sql-server.png'},
    {name:'PowerBi',img:'assets/images/powerbi-logo.png'},
    {name:'Tableau',img:'assets/images/tableau-logo.png'},
    {name:'Oracle',img:'assets/images/oracle.png'},
    {name:'Oracle',img:'assets/images/oracle.png'},
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
