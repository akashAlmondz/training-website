import { Component, OnInit } from '@angular/core';
import { Titles } from 'src/app/titles&meta';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  
  courseList = [
    {title:'All Course', courses:[
      {name:'Python training', routerLink:'courses/python-training-course-in-delhincr'},
      {name:'Data Science training', routerLink:'courses/data-science-training-course-in-delhincr'},
      {name:'Machine Learning training', routerLink:'courses/machine-learning-training-course-in-delhincr'},
      {name:'Deep Learning training', routerLink:'courses/deep-learning-training-course-in-delhincr'},
      {name:'Artificial Inteligence training', routerLink:'courses/artificial-inteligence-training-course-in-delhincr'},
      {name:'RPA training', routerLink:'courses/rpa-course-in-delhincr'},
      {name:'Java training', routerLink:'courses/java-course-in-delhincr'},
      {name:'.Net training', routerLink:'.net-course-in-delhincr'},
      {name:'VBA training', routerLink:'vba-course-in-delhincr'},
      {name:'PHP', routerLink:'courses/php-course-in-delhincr'},
      {name:'HTML5/CSS3/JS', routerLink:'courses/html5-css3-js-course-in-delhincr'},
      {name:'Angular', routerLink:'courses/angular-course-in-delhincr'},
      {name:'Node', routerLink:'courses/nodejs-course-in-delhincr'},
      {name:'React', routerLink:'courses/react-course-in-delhincr'},
      {name:'Python Django/Flask', routerLink:'courses/pyhton-django-course-in-delhincr'},
      {name:'MongoDB', routerLink:'courses/mongodb-course-in-delhincr'},
      {name:'SQL', routerLink:'courses/sql-course-in-delhincr'},
      {name:'Oracle', routerLink:'courses/oracle-course-in-delhincr'},
      {name:'Power Bi', routerLink:'courses/powerBi-course-in-delhincr'},
      {name:'Tablue', routerLink:'courses/courses/tableau-course-in-delhincr'},
      {name:'SMO(Social media optimization)', routerLink:'courses/social-media-optimization-course-in-delhincr'},
      {name:'PPC(Pay-per-click)', routerLink:'courses/pay-per-click-course-in-delhincr'},
      {name:'SEO(Search engine optimization)', routerLink:'courses/seo-course-in-delhincr'},
      {name:'Google Ads', routerLink:'courses/google-ads-certification-course-in-delhincr'},
      {name:'Facebook Ads', routerLink:'courses/facebook_ads_certification-course-in-delhincr'},
      {name:'Social Media Promotion', routerLink:'courses/social-media-promotion-course-in-delhincr'},
      {name:'E-mail Marketing', routerLink:'courses/email-marketing-course-in-delhincr'},
      {name:'Diploma in Data Science', routerLink:'courses/diploma-in-data-science-course-in-delhincr'},
      {name:'Diploma in Machine Learning', routerLink:'courses/diploma-in-machine-learning-course-in-delhincr'},
      {name:'Masters in Data Science', routerLink:'courses/masters-in-data-science-course-in-delhincr'},
      {name:'Masters in Machine Learning', routerLink:'courses/masters-in-machine-learning-course-in-delhincr'},
    ]},
    {title:'Popular Courses', courses:[
      {name:'Python training', routerLink:'courses/python-training-course-in-delhincr'},
      {name:'Data Science training', routerLink:'courses/data-science-training-course-in-delhincr'},
      {name:'Machine Learning training', routerLink:'courses/machine-learning-training-course-in-delhincr'},
      {name:'Deep Learning training', routerLink:'courses/deep-learning-training-course-in-delhincr'},
      {name:'Artificial Inteligence training', routerLink:'courses/artificial-inteligence-training-course-in-delhincr'},
      {name:'RPA training', routerLink:'courses/rpa-course-in-delhincr'},
      {name:'Java training', routerLink:'courses/java-course-in-delhincr'},
      {name:'.Net training', routerLink:'.net-course-in-delhincr'},
      {name:'VBA training', routerLink:'vba-course-in-delhincr'},
    ]},
    {title:'Web Development', courses:[
      {name:'PHP', routerLink:'courses/php-course-in-delhincr'},
      {name:'HTML5/CSS3/JS', routerLink:'courses/html5-css3-js-course-in-delhincr'},
      {name:'Angular', routerLink:'courses/angular-course-in-delhincr'},
      {name:'Node', routerLink:'courses/nodejs-course-in-delhincr'},
      {name:'React', routerLink:'courses/react-course-in-delhincr'},
      {name:'Python Django/Flask', routerLink:'courses/pyhton-django-course-in-delhincr'},
    ]},
    {title:'Database & Analytics Tools', courses:[
      {name:'MongoDB', routerLink:'courses/mongodb-course-in-delhincr'},
      {name:'SQL', routerLink:'courses/sql-course-in-delhincr'},
      {name:'Oracle', routerLink:'courses/oracle-course-in-delhincr'},
      {name:'Power Bi', routerLink:'courses/powerBi-course-in-delhincr'},
      {name:'Tablue', routerLink:'courses/courses/tableau-course-in-delhincr'},
    ]},
    {title:'Digital Marketing', courses:[
      {name:'SMO(Social media optimization)', routerLink:'courses/social-media-optimization-course-in-delhincr'},
      {name:'PPC(Pay-per-click)', routerLink:'courses/pay-per-click-course-in-delhincr'},
      {name:'SEO(Search engine optimization)', routerLink:'courses/seo-course-in-delhincr'},
      {name:'Google Ads', routerLink:'courses/google-ads-certification-course-in-delhincr'},
      {name:'Facebook Ads', routerLink:'courses/facebook_ads_certification-course-in-delhincr'},
      {name:'Social Media Promotion', routerLink:'courses/social-media-promotion-course-in-delhincr'},
      {name:'E-mail Marketing', routerLink:'courses/email-marketing-course-in-delhincr'},
    ]},
    {title:'Specialization Courses', courses:[
      {name:'Diploma in Data Science', routerLink:'courses/diploma-in-data-science-course-in-delhincr'},
      {name:'Diploma in Machine Learning', routerLink:'courses/diploma-in-machine-learning-course-in-delhincr'},
      {name:'Masters in Data Science', routerLink:'courses/masters-in-data-science-course-in-delhincr'},
      {name:'Masters in Machine Learning', routerLink:'courses/masters-in-machine-learning-course-in-delhincr'},
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
    // setTimeout(() => {
    //   this.popUp = 2
    // },2000);
  }

 
  
}
