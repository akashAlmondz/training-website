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

  coursesCards = [
    {name:'A complete guide to design',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/design.jpg',authImg:'assets/images/auth.jpg'},
    {name:'Beginners guide to HTML',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/html.jpg',authImg:'assets/images/auth.jpg'},
    {name:'Advanced Photoshop',author:'Michael Smith', about:'Adobe Guide, Layes, Smart Objects etc...',price:39,img:'assets/images/photoShop.jpg',authImg:'assets/images/auth.jpg'},
  ]

  servicesCards = [
    {img:'assets/images/earth-globe.svg',name:'OnlineCourses',about:'In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.'},
    {img:'assets/images/exam.svg',name:'Indoor Courses',about:'In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.'},
    {img:'assets/images/books.svg',name:'Amazing Library',about:'In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.'},
    {img:'assets/images/professor.svg',name:'Exceptional Professors',about:'In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.'},
    {img:'assets/images/blackboard.svg',name:'Top Programs',about:'In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.'},
    {img:'assets/images/mortarboard.svg',name:'Graduate Diploma',about:'In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.'},
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
    {date:'07',month:'December',name:'In aliquam, augue a gravida rutrum',about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequuntur, praesentium delectus voluptatum dolorem eligendi labore sunt fuga pariatur modi, beatae, culpa tempora. Accusamus in doloremque rerum corrupti voluptate consequatur?'},
    {date:'07',month:'December',name:'In aliquam, augue a gravida rutrum',about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequuntur, praesentium delectus voluptatum dolorem eligendi labore sunt fuga pariatur modi, beatae, culpa tempora. Accusamus in doloremque rerum corrupti voluptate consequatur?'},
    {date:'07',month:'December',name:'In aliquam, augue a gravida rutrum',about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequuntur, praesentium delectus voluptatum dolorem eligendi labore sunt fuga pariatur modi, beatae, culpa tempora. Accusamus in doloremque rerum corrupti voluptate consequatur?'},
    {date:'07',month:'December',name:'In aliquam, augue a gravida rutrum',about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequuntur, praesentium delectus voluptatum dolorem eligendi labore sunt fuga pariatur modi, beatae, culpa tempora. Accusamus in doloremque rerum corrupti voluptate consequatur?'},

  ]

  ngOnInit(): void {
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
