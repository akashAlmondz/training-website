import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private titleService:Title) { }

  
  courseList = [
    {title:'All Course', courses:[
      {title: 'Python Course in Delhi | Python Training in Delhi', name:'Python training', routerLink:'courses/Python_Training_course_DelhiNCR'},
      {title: 'Data Science Course in Delhi | Data Science Training in Delhi', name:'Data Science training', routerLink:'courses/Data_Science_Training_course_DelhiNCR'},
      {title: '', name:'Machine Learning training', routerLink:'courses/Machine_Learning_Training_course_DelhiNCR'},
      {title: '', name:'Deep Learning training', routerLink:'courses/Deep_Learning_Training_course_DelhiNCR'},
      {title: '', name:'Artificial Inteligence training', routerLink:'courses/Artificial_Inteligence_Training_course_DelhiNCR'},
      {title: '', name:'RPA training', routerLink:'courses/RPA_course_DelhiNCR'},
      {title: '', name:'Java training', routerLink:'courses/Java_course_DelhiNCR'},
      {title: '', name:'.Net training', routerLink:'NET_course_DelhiNCR'},
      {title: '', name:'VBA training', routerLink:'VBA_course_DelhiNCR'},
      {title: '', name:'PHP', routerLink:'courses/PHP_course_DelhiNCR'},
      {title: '', name:'HTML5/CSS3/JS', routerLink:'courses/HTML5_CSS3_JS_course_DelhiNCR'},
      {title: '', name:'Angular', routerLink:'courses/Angular_course_DelhiNCR'},
      {title: '', name:'Node', routerLink:'courses/NodeJs_course_DelhiNCR'},
      {title: '', name:'React', routerLink:'courses/React_course_DelhiNCR'},
      {title: '', name:'Python Django/Flask', routerLink:'courses/Pyhton_Django_course_DelhiNCR'},
      {title: '', name:'MongoDB', routerLink:'courses/MongoDB_course_DelhiNCR'},
      {title: '', name:'SQL', routerLink:'courses/SQL_course_DelhiNCR'},
      {title: '', name:'Oracle', routerLink:'courses/Oracle_course_DelhiNCR'},
      {title: '', name:'Power Bi', routerLink:'courses/PowerBi_course_DelhiNCR'},
      {title: '', name:'Tablue', routerLink:'courses/courses/Tableau_course_DelhiNCR'},
      {title: '', name:'SMO(Social media optimization)', routerLink:'courses/Social_media_Optimization_course_DelhiNCR'},
      {title: '', name:'PPC(Pay-per-click)', routerLink:'courses/Pay_per_click_course_DelhiNCR'},
      {title: '', name:'SEO(Search engine optimization)', routerLink:'courses/SEO_course_DelhiNCR'},
      {title: '', name:'Google Ads', routerLink:'courses/Google_ads_certification_course_DelhiNCR'},
      {title: '', name:'Facebook Ads', routerLink:'courses/Facebook_ads_certification_course_DelhiNCR'},
      {title: '', name:'Social Media Promotion', routerLink:'courses/Social_media_promotion_course_DelhiNCR'},
      {title: '', name:'E-mail Marketing', routerLink:'courses/Email_marketing_course_DelhiNCR'},
      {title: '', name:'Diploma in Data Science', routerLink:'courses/Diploma_in_DataScience_course_DelhiNCR'},
      {title: '', name:'Diploma in Machine Learning', routerLink:'courses/Diploma_in_Machine_Learning_course_DelhiNCR'},
      {title: '', name:'Masters in Data Science', routerLink:'courses/Masters_in_DataScience_course_DelhiNCR'},
      {title: '', name:'Masters in Machine Learning', routerLink:'courses/Masters_in_Machine_Learning_course_DelhiNCR'},
    ]},
    {title:'Popular Courses', courses:[
      {title: '', name:'Python training', routerLink:'courses/Python_Training_course_DelhiNCR'},
      {title: '', name:'Data Science training', routerLink:'courses/Data_Science_Training_course_DelhiNCR'},
      {title: '', name:'Machine Learning training', routerLink:'courses/Machine_Learning_Training_course_DelhiNCR'},
      {title: '', name:'Deep Learning training', routerLink:'courses/Deep_Learning_Training_course_DelhiNCR'},
      {title: '', name:'Artificial Inteligence training', routerLink:'courses/Artificial_Inteligence_Training_course_DelhiNCR'},
      {title: '', name:'RPA training', routerLink:'courses/RPA_course_DelhiNCR'},
      {title: '', name:'Java training', routerLink:'courses/Java_course_DelhiNCR'},
      {title: '', name:'.Net training', routerLink:'NET_course_DelhiNCR'},
      {title: '', name:'VBA training', routerLink:'VBA_course_DelhiNCR'},
    ]},
    {title:'Web Development', courses:[
      {title: '', name:'PHP', routerLink:'courses/PHP_course_DelhiNCR'},
      {title: '', name:'HTML5/CSS3/JS', routerLink:'courses/HTML5_CSS3_JS_course_DelhiNCR'},
      {title: '', name:'Angular', routerLink:'courses/Angular_course_DelhiNCR'},
      {title: '', name:'Node', routerLink:'courses/NodeJs_course_DelhiNCR'},
      {title: '', name:'React', routerLink:'courses/React_course_DelhiNCR'},
      {title: '', name:'Python Django/Flask', routerLink:'courses/Pyhton_Django_course_DelhiNCR'},
    ]},
    {title:'Database & Analytics Tools', courses:[
      {title: '', name:'MongoDB', routerLink:'courses/MongoDB_course_DelhiNCR'},
      {title: '', name:'SQL', routerLink:'courses/SQL_course_DelhiNCR'},
      {title: '', name:'Oracle', routerLink:'courses/Oracle_course_DelhiNCR'},
      {title: '', name:'Power Bi', routerLink:'courses/PowerBi_course_DelhiNCR'},
      {title: '', name:'Tablue', routerLink:'courses/courses/Tableau_course_DelhiNCR'},
    ]},
    {title:'Digital Marketing', courses:[
      {title: '', name:'SMO(Social media optimization)', routerLink:'courses/Social_media_Optimization_course_DelhiNCR'},
      {title: '', name:'PPC(Pay-per-click)', routerLink:'courses/Pay_per_click_course_DelhiNCR'},
      {title: '', name:'SEO(Search engine optimization)', routerLink:'courses/SEO_course_DelhiNCR'},
      {title: '', name:'Google Ads', routerLink:'courses/Google_ads_certification_course_DelhiNCR'},
      {title: '', name:'Facebook Ads', routerLink:'courses/Facebook_ads_certification_course_DelhiNCR'},
      {title: '', name:'Social Media Promotion', routerLink:'courses/Social_media_promotion_course_DelhiNCR'},
      {title: '', name:'E-mail Marketing', routerLink:'courses/Email_marketing_course_DelhiNCR'},
    ]},
    {title:'Specialization Courses', courses:[
      {title: '', name:'Diploma in Data Science', routerLink:'courses/Diploma_in_DataScience_course_DelhiNCR'},
      {title: '', name:'Diploma in Machine Learning', routerLink:'courses/Diploma_in_Machine_Learning_course_DelhiNCR'},
      {title: '', name:'Masters in Data Science', routerLink:'courses/Masters_in_DataScience_course_DelhiNCR'},
      {title: '', name:'Masters in Machine Learning', routerLink:'courses/Masters_in_Machine_Learning_course_DelhiNCR'},
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

  setDocTitle(value) {
    console.log('current title:::::' + this.titleService.getTitle());
    this.titleService.setTitle(value);
 }
  
}
