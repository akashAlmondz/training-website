import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  
  courseList = [
    {title:'All Course', courses:[
      {name:'Python training', routerLink:'courses/Python_Training_course_DelhiNCR'},
      {name:'Data Science training', routerLink:'courses/Data_Science_Training_course_DelhiNCR'},
      {name:'Machine Learning training', routerLink:'courses/Machine_Learning_Training_course_DelhiNCR'},
      {name:'Deep Learning training', routerLink:'courses/Deep_Learning_Training_course_DelhiNCR'},
      {name:'Artificial Inteligence training', routerLink:'courses/Artificial_Inteligence_Training_course_DelhiNCR'},
      {name:'RPA training', routerLink:'courses/RPA_course_DelhiNCR'},
      {name:'Java training', routerLink:'courses/Java_course_DelhiNCR'},
      {name:'.Net training', routerLink:'NET_course_DelhiNCR'},
      {name:'VBA training', routerLink:'VBA_course_DelhiNCR'},
      {name:'PHP', routerLink:'courses/PHP_course_DelhiNCR'},
      {name:'HTML5/CSS3/JS', routerLink:'courses/HTML5_CSS3_JS_course_DelhiNCR'},
      {name:'Angular', routerLink:'courses/Angular_course_DelhiNCR'},
      {name:'Node', routerLink:'courses/NodeJs_course_DelhiNCR'},
      {name:'React', routerLink:'courses/React_course_DelhiNCR'},
      {name:'Python Django/Flask', routerLink:'courses/Pyhton_Django_course_DelhiNCR'},
      {name:'MongoDB', routerLink:'courses/MongoDB_course_DelhiNCR'},
      {name:'SQL', routerLink:'courses/SQL_course_DelhiNCR'},
      {name:'Oracle', routerLink:'courses/Oracle_course_DelhiNCR'},
      {name:'Power Bi', routerLink:'courses/PowerBi_course_DelhiNCR'},
      {name:'Tablue', routerLink:'courses/courses/Tableau_course_DelhiNCR'},
      {name:'SMO(Social media optimization)', routerLink:''},
      {name:'PPC(Pay-per-click)', routerLink:''},
      {name:'SEO(Search engine optimization)', routerLink:''},
      {name:'Google Ads', routerLink:''},
      {name:'Facebook Ads', routerLink:''},
      {name:'Social Media Promotion', routerLink:''},
      {name:'E-mail Marketing', routerLink:''},
      {name:'Diploma in Data Science', routerLink:'courses/Diploma_in_DataScience_course_DelhiNCR'},
      {name:'Diploma in Machine Learning', routerLink:'courses/Diploma_in_Machine_Learning_course_DelhiNCR'},
      {name:'Masters in Data Science', routerLink:'courses/Masters_in_DataScience_course_DelhiNCR'},
      {name:'Masters in Machine Learning', routerLink:'courses/Masters_in_Machine_Learning_course_DelhiNCR'},
    ]},
    {title:'Popular Courses', courses:[
      {name:'Python training', routerLink:'courses/Python_Training_course_DelhiNCR'},
      {name:'Data Science training', routerLink:'courses/Data_Science_Training_course_DelhiNCR'},
      {name:'Machine Learning training', routerLink:'courses/Machine_Learning_Training_course_DelhiNCR'},
      {name:'Deep Learning training', routerLink:'courses/Deep_Learning_Training_course_DelhiNCR'},
      {name:'Artificial Inteligence training', routerLink:'courses/Artificial_Inteligence_Training_course_DelhiNCR'},
      {name:'RPA training', routerLink:'courses/RPA_course_DelhiNCR'},
      {name:'Java training', routerLink:'courses/Java_course_DelhiNCR'},
      {name:'.Net training', routerLink:'NET_course_DelhiNCR'},
      {name:'VBA training', routerLink:'VBA_course_DelhiNCR'},
    ]},
    {title:'Web Development', courses:[
      {name:'PHP', routerLink:'courses/PHP_course_DelhiNCR'},
      {name:'HTML5/CSS3/JS', routerLink:'courses/HTML5_CSS3_JS_course_DelhiNCR'},
      {name:'Angular', routerLink:'courses/Angular_course_DelhiNCR'},
      {name:'Node', routerLink:'courses/NodeJs_course_DelhiNCR'},
      {name:'React', routerLink:'courses/React_course_DelhiNCR'},
      {name:'Python Django/Flask', routerLink:'courses/Pyhton_Django_course_DelhiNCR'},
    ]},
    {title:'Database & Analytics Tools', courses:[
      {name:'MongoDB', routerLink:'courses/MongoDB_course_DelhiNCR'},
      {name:'SQL', routerLink:'courses/SQL_course_DelhiNCR'},
      {name:'Oracle', routerLink:'courses/Oracle_course_DelhiNCR'},
      {name:'Power Bi', routerLink:'courses/PowerBi_course_DelhiNCR'},
      {name:'Tablue', routerLink:'courses/courses/Tableau_course_DelhiNCR'},
    ]},
    {title:'Digital Marketing', courses:[
      {name:'SMO(Social media optimization)', routerLink:''},
      {name:'PPC(Pay-per-click)', routerLink:''},
      {name:'SEO(Search engine optimization)', routerLink:''},
      {name:'Google Ads', routerLink:''},
      {name:'Facebook Ads', routerLink:''},
      {name:'Social Media Promotion', routerLink:''},
      {name:'E-mail Marketing', routerLink:''},
    ]},
    {title:'Specialization Courses', courses:[
      {name:'Diploma in Data Science', routerLink:'courses/Diploma_in_DataScience_course_DelhiNCR'},
      {name:'Diploma in Machine Learning', routerLink:'courses/Diploma_in_Machine_Learning_course_DelhiNCR'},
      {name:'Masters in Data Science', routerLink:'courses/Masters_in_DataScience_course_DelhiNCR'},
      {name:'Masters in Machine Learning', routerLink:'courses/Masters_in_Machine_Learning_course_DelhiNCR'},
    ]}
  ]
  socialMedia = [
    {img:'assets/images/fb.svg'},
    {img:'assets/images/lin.svg'},
    {img:'assets/images/insta.svg'},
    {img:'assets/images/twt.svg'},
  ]

  
  popUp = 0;
  showDropdown = 0;
  activeSection = 0;
  activeList = this.courseList[this.activeSection].courses;
  toggle:string = "none";
  show(value:string){
    if(value==this.toggle){
      this.toggle = "none"
    }else{
      this.toggle = value
    }
  }
  option:any
  activeOption(value:any){
    // this.option = document.getElementsByClassName('active')
    this.activeSection = this.courseList.indexOf(value)
    this.activeList = this.courseList[this.activeSection].courses
  }
  toggleDropdown(value:any){
    if (value == this.showDropdown){
      this.showDropdown = 0
    }
    else{
      this.showDropdown = value
    }
  }
  togglePopup(value:any){
    this.popUp = value
  }

  


  

  ngOnInit(): void {
    window.addEventListener("scroll",function(){
      const header=document.querySelector('nav');
      if (header){
        header.classList.toggle("sticky", window.scrollY>10);
      }
    })
    setTimeout(() => {
      this.popUp = 2
    },2000);
  }
  
}
