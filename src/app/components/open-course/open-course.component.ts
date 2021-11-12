import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-course',
  templateUrl: './open-course.component.html',
  styleUrls: ['./open-course.component.css']
})
export class OpenCourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
        
    window.addEventListener("scroll",function(){
      const div=document.getElementById('query');
      if (div){
        div.classList.toggle("sticky", window.scrollY>600);
      }
    })

    window.addEventListener("scroll",function(){
      const div=document.getElementById('query');
      if (div){
        div.classList.toggle("static", window.scrollY>1000);
      }
    })

  }
 
sections = [
  {id:1, img:"fas fa-laptop-code",name:'lorem Impsum A',about:['Web scrapping','lorem ipsum2','lorem ipsom3']},
  {id:2, img:"fas fa-puzzle-piece",name:'lorem Impsum B',about:['Data Science','lorem ipsum2','lorem ipsom3']},
  {id:3, img:"fas fa-trophy",name:'lorem Impsum C',about:['machine learning','lorem ipsum2','lorem ipsom3']},
]

activeSection = 1

active(num:any){
  this.activeSection=num
}



}
