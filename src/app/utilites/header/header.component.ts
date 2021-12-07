import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener("scroll",function(){
      const header=document.querySelector('nav');
      if (header){
        header.classList.toggle("sticky", window.scrollY>10);
      }
    })
  }
  courseList = [
    {title:'All Course', courses:['Python training','Data Science training','Machine Learning training','Deep Learning training','Artificial Inteligence training','RPA training','Java training','.Net training','VBA training','Angular','Node','HTML5/CSS3/JS','PHP','React','Python Django/Flask','MongoDB','SQL','Oracle','Power BI','Tablue','SMO(Social media optimization)','PPC(Pay-per-click)','SEO(Search engine optimization)','Google Ads','Facebook Ads','Social Media Promotion','E-mail Marketing','Diploma in Data Science','Diploma in Machine Learning','Masters in Data Science','Masters in Machine Learning']},
    {title:'Popular Courses', courses:['Python training','Data Science training','Machine Learning training','Deep Learning training','Artificial Inteligence training','RPA training','Java training','.Net training','VBA training']},
    {title:'Web Development', courses:['Angular','Node','HTML5/CSS3/JS','PHP','React','Python Django/Flask']},
    {title:'Database & Analytics Tools', courses:['MongoDB','SQL','Oracle','Power BI','Tablue']},
    {title:'Digital Marketing', courses:['SMO(Social media optimization)','PPC(Pay-per-click)','SEO(Search engine optimization)','Google Ads','Facebook Ads','Social Media Promotion','E-mail Marketing']},
    {title:'Specialization Courses', courses:['Diploma in Data Science','Diploma in Machine Learning','Masters in Data Science','Masters in Machine Learning']}
  ]
  activeSection = 0
  activeList = this.courseList[this.activeSection].courses
  toggle:string = "menu"
  show(value:string){
    if(value==this.toggle){
      this.toggle = "none"
    }else{
      this.toggle = value
    }
  }
  activeOption(value:any){
    this.activeSection = this.courseList.indexOf(value)
    this.activeList = this.courseList[this.activeSection].courses
    console.log(this.activeList)
  }

  
}
