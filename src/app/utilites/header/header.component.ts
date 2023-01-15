import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OffersComponent } from 'src/app/components/offers/offers.component';
import { QformComponent } from 'src/app/components/qform/qform.component';
import { FormAComponent } from '../form-a/form-a.component';
// import { SMTPClient } from 'emailjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(  private dilog: MatDialog,private router:Router ) {}
   submitForm(value){
    
     console.log(value)
   
   }
  
  courseList = [
    {title:'All Course', courses:[
      {name:'BMS Degree in Python training', routerLink:'courses/python-training-course'},
      {name:'BMS Degree in Data Science training', routerLink:'courses/data-science-training-course'},
      {name:'BMS Degree in Machine Learning training', routerLink:'courses/machine-learning-training-course'},
      {name:'BMS Degree in Deep Learning training', routerLink:'courses/deep-learning-training-course'},
      {name:'BMS Degree in Artificial Inteligence training', routerLink:'courses/artificial-inteligence-training-course'},
      {name:'RPA training', routerLink:'courses/rpa-course'},
      {name:'Java training', routerLink:'courses/java-course'},
      {name:'.Net training', routerLink:'courses/.net-course'},
      {name:'VBA training', routerLink:'courses/vba-course'},
      {name:'PHP', routerLink:'courses/php-course'},
      {name:'HTML5/CSS3/JS', routerLink:'courses/html5-css3-js-course'},
      {name:'Angular', routerLink:'courses/angular-course'},
      {name:'Node', routerLink:'courses/nodejs-course'},
      {name:'React', routerLink:'courses/react-course'},
      {name:'Python Django/Flask', routerLink:'courses/pyhton-django-course'},
      {name:'MongoDB', routerLink:'courses/mongodb-course'},
      {name:'SQL', routerLink:'courses/sql-course'},
      {name:'Oracle', routerLink:'courses/oracle-course'},
      {name:'Power Bi', routerLink:'courses/powerBi-course'},
      {name:'Tablue', routerLink:'courses/courses/tableau-course'},
      {name:'SMO(Social media optimization)', routerLink:'courses/social-media-optimization-course'},
      {name:'PPC(Pay-per-click)', routerLink:'courses/pay-per-click-course'},
      {name:'SEO(Search engine optimization)', routerLink:'courses/seo-course'},
      {name:'Google Ads', routerLink:'courses/google-ads-certification-course'},
      {name:'Facebook Ads', routerLink:'courses/facebook_ads_certification-course'},
      {name:'Social Media Promotion', routerLink:'courses/social-media-promotion-course'},
      {name:'E-mail Marketing', routerLink:'courses/email-marketing-course'},
      {name:'Diploma in Data Science', routerLink:'courses/diploma-in-data-science-course'},
      {name:'Diploma in Machine Learning', routerLink:'courses/diploma-in-machine-learning-course'},
      {name:'Masters in Data Science', routerLink:'courses/masters-in-data-science-course'},
      {name:'Masters in Machine Learning', routerLink:'courses/masters-in-machine-learning-course'},
    ]},
    {title:'Popular Courses', courses:[
      {name:'Python training', routerLink:'courses/python-training-course'},
      {name:'Data Science training', routerLink:'courses/data-science-training-course'},
      {name:'Machine Learning training', routerLink:'courses/machine-learning-training-course'},
      {name:'Deep Learning training', routerLink:'courses/deep-learning-training-course'},
      {name:'Artificial Inteligence training', routerLink:'courses/artificial-inteligence-training-course'},
      {name:'RPA training', routerLink:'courses/rpa-course'},
      {name:'Java training', routerLink:'courses/java-course'},
      {name:'.Net training', routerLink:'courses/.net-course'},
      {name:'VBA training', routerLink:'courses/vba-course'},
    ]},
    {title:'Web Development', courses:[
      {name:'PHP', routerLink:'courses/php-course'},
      {name:'HTML5/CSS3/JS', routerLink:'courses/html5-css3-js-course'},
      {name:'Angular', routerLink:'courses/angular-course'},
      {name:'Node', routerLink:'courses/nodejs-course'},
      {name:'React', routerLink:'courses/react-course'},
      {name:'Python Django/Flask', routerLink:'courses/pyhton-django-course'},
    ]},
    {title:'Database & Analytics Tools', courses:[
      {name:'MongoDB', routerLink:'courses/mongodb-course'},
      {name:'SQL', routerLink:'courses/sql-course'},
      {name:'Oracle', routerLink:'courses/oracle-course'},
      {name:'Power Bi', routerLink:'courses/powerBi-course'},
      {name:'Tablue', routerLink:'courses/courses/tableau-course'},
    ]},
    {title:'Digital Marketing', courses:[
      {name:'SMO(Social media optimization)', routerLink:'courses/social-media-optimization-course'},
      {name:'PPC(Pay-per-click)', routerLink:'courses/pay-per-click-course'},
      {name:'SEO(Search engine optimization)', routerLink:'courses/seo-course'},
      {name:'Google Ads', routerLink:'courses/google-ads-certification-course'},
      {name:'Facebook Ads', routerLink:'courses/facebook_ads_certification-course'},
      {name:'Social Media Promotion', routerLink:'courses/social-media-promotion-course'},
      {name:'E-mail Marketing', routerLink:'courses/email-marketing-course'},
    ]},
    {title:'Cloud & DevOps', courses:[
      {name:'Azure training',routerLink:'courses/azure-training'},
      {name:'AWS training',routerLink:'courses/aws-training'},
      {name:'GCP training',routerLink:'courses/gcp-training'},
    ]},
    {title:'Specialization Courses', courses:[
      {name:'Diploma in Data Science', routerLink:'courses/diploma-in-data-science-course'},
      {name:'Diploma in Machine Learning', routerLink:'courses/diploma-in-machine-learning-course'},
      {name:'Masters in Data Science', routerLink:'courses/masters-in-data-science-course'},
      {name:'Masters in Machine Learning', routerLink:'courses/masters-in-machine-learning-course'},
    ]}
  ]
  socialMedia = [
    {img:'assets/images/fb.svg',link:''},
    {img:'assets/images/lin.svg',link:'https://www.linkedin.com/in/bookmy-shiksha-988610229/'},
    {img:'assets/images/insta.svg',link:'https://www.instagram.com/bookmyshiksha/'},
    {img:'assets/images/twt.svg',link:'https://twitter.com/bookmyshiksha'},
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
   this.showDropdown = value
  }
  togglePopup(){
    this.dilog.open(FormAComponent)
  }
  showOffer = false
  showOffers(action:boolean){
    this.showOffer = action
  }

  

  
  
  

  ngOnInit(): void {
    window.addEventListener("scroll",function(){
      const header=document.querySelector('nav');
      if (header){
        header.classList.toggle("sticky", window.scrollY>10);
      }
    })
    setTimeout(() => {
      if(this.router.url=='/' && localStorage.getItem('formSubmit') != 'true' ){
        this.dilog.open(QformComponent)
      }
    },500);

    // setTimeout(()=>{
    //   this.showOffers(true)
    // },20000)


  
  }


  
}
