import { Component, OnInit } from '@angular/core';
import { courses } from 'src/app/courses';
import { setDate } from 'src/app/functions/dateFunction';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  date = setDate
  constructor() { }
  
  landingCards = [
    {name:'Online Courses',icon:'fas fa-globe-americas'},
    {name:'Our Library',icon:'fas fa-book'},
    {name:'Our teachers',icon:'fas fa-chalkboard-teacher'}
  ]

  report = [
    {name:'Projects',value:'15+',icon:'fas fa-edit'},
    {name:'Satisfied Learners',value:'40+',icon:'far fa-user'},
    {name:'Assignments',value:'30+',icon:'far fa-file-code'},
    {name:'Hours Classes',value:'120+',icon:'far fa-clock'},
  ]

 
  courseList = [
    {title:'Specialization Courses', courses:[
      {name:'Diploma in Data Science',img:'assets/images/diplomaDS.png', duration: '4 Months', startDate:this.date(5), routerLink:'courses/diploma-in-data-science-course'},
      {name:'Diploma in Machine Learning',img:'assets/images/diplomaML.png', duration: '5 Months', startDate:this.date(5), routerLink:'courses/diploma-in-machine-learning-course'},
      {name:'Masters in Data Science',img:'assets/images/mastersDS.png', duration: '6 Months', startDate:this.date(5), routerLink:'courses/masters-in-data-science-course'},
      {name:'Masters in Machine Learning',img:'assets/images/mastersML.png', duration: '8 Months', startDate:this.date(5), routerLink:'courses/masters-in-machine-learning-course'},
    ]},
    {title:'Popular Courses', courses:[
      {name:'BMS Degree in Python training',img:'assets/images/python.svg',  duration: '2 Months', startDate:this.date(5), routerLink:'courses/python-training-course'},
      {name:'BMS Degree in Data Science training',img:'assets/images/data-science.svg', duration: '4 Months', startDate:this.date(5), routerLink:'courses/data-science-training-course'},
      {name:'BMS Degree in Machine Learning training',img:'assets/images/machine-learning.png', duration: '6 Months', startDate:this.date(5), routerLink:'courses/machine-learning-training-course'},
      {name:'BMS Degree in Deep Learning training',img:'assets/images/deep-learning.png', duration: '7 Months', startDate:this.date(5), routerLink:'courses/deep-learning-training-course'},
      {name:'BMS Degree in Artificial Inteligence training',img:'assets/images/artificial-intelligence.png', duration: '8 Months', startDate:this.date(5), routerLink:'courses/artificial-inteligence-training-course'},
      {name:'RPA training',img:'assets/images/robotics.png', duration: '3 Months', startDate:this.date(5), routerLink:'courses/rpa-course'},
      {name:'Java training',img:'assets/images/java.png', duration: '3 Months', startDate:this.date(5), routerLink:'courses/java-course'},
      {name:'.Net training',img:'assets/images/website.png', duration: '4 Months', startDate:this.date(5), routerLink:'courses/.net-course'},
      {name:'VBA training',img:'assets/images/vba.png', duration: '2 Months', startDate:this.date(5), routerLink:'courses/vba-course'},
    ]},
    {title:'Web Development', courses:[
      {name:'PHP',img:'assets/images/php.png', duration: '3 Months', startDate:this.date(5), routerLink:'courses/php-course'},
      {name:'HTML5/CSS3/JS',img:'assets/images/html.png', duration: '3 Months', startDate:this.date(5), routerLink:'courses/html5-css3-js-course'},
      {name:'Angular',img:'assets/images/angular.svg', duration: '3 Months', startDate:this.date(5), routerLink:'courses/angular-course'},
      {name:'Node',img:'assets/images/nodejs.svg', duration: '3 Months', startDate:this.date(5), routerLink:'courses/nodejs-course'},
      {name:'React',img:'assets/images/react.svg', duration: '3 Months', startDate:this.date(5), routerLink:'courses/react-course'},
      {name:'Python Django/Flask',img:'assets/images/django.svg', duration: '3 Months', startDate:this.date(5), routerLink:'courses/pyhton-django-course'},
    ]},
    {title:'Database & Analytics Tools', courses:[
      {name:'MongoDB',img:'assets/images/mongodb.svg', duration: '2 Months', startDate:this.date(5), routerLink:'courses/mongodb-course'},
      {name:'SQL',img:'assets/images/sql-server.png', duration: '2 Months', startDate:this.date(5), routerLink:'courses/sql-course'},
      {name:'Oracle',img:'assets/images/oracle.png', duration: '3 Months', startDate:this.date(5), routerLink:'courses/oracle-course'},
      {name:'Power Bi',img:'assets/images/powerbi-logo.png', duration: '2 Months', startDate:this.date(5), routerLink:'courses/powerBi-course'},
      {name:'Tablue',img:'assets/images/tableau-logo.png', duration: '2 Months', startDate:this.date(5), routerLink:'courses/courses/tableau-course'},
    ]},
    {
      title:'EV charging Program', courses:[
        {name:'EV charging Program',img:'assets/images/evCharge.png',duration: '4 months', startDate:this.date(5),routerLink:'courses/ev-charging-course'}
      ]
    },
    {title:'Digital Marketing', courses:[
      {name:'SMO(Social media optimization)', img:'assets/images/SMO.png', duration: '1.5 Months', startDate:this.date(5), routerLink:'courses/social-media-optimization-course'},
      {name:'PPC(Pay-per-click)', img:'assets/images/PPC.png', duration: '1 Months', startDate:this.date(5), routerLink:'courses/pay-per-click-course'},
      {name:'SEO(Search engine optimization)', img:'assets/images/SEO.png', duration: '2 Months', startDate:this.date(5), routerLink:'courses/seo-course'},
      {name:'Google Ads', img:'assets/images/Google ads.png', duration: '1 Months', startDate:this.date(5), routerLink:'courses/google-ads-certification-course'},
      {name:'Facebook Ads', img:'assets/images/facebook ads.png', duration: '1 Months', startDate:this.date(5), routerLink:'courses/facebook_ads_certification-course'},
      {name:'Social Media Promotion', img:'assets/images/Social media promotion.png', duration: '4 Months', startDate:this.date(5), routerLink:'courses/social-media-promotion-course'},
      {name:'E-mail Marketing', img:'assets/images/Email marketing.png', duration: '1 Months', startDate:this.date(5), routerLink:'courses/email-marketing-course'},
    ]},
    
  ]


  servicesCards = [
    {img:'assets/images/services/online_training.png',name:'Online Training',about:'At BookMyShiksha, you will be able to get top notch training and skill development programs from tutors across the world. The courses are curated by experts from relevant fields. Learn at your desired pace, with lifetime access to live, and recorded sessions. At BookMyShiksha, you will be able to ask your educators questions, chat with your peers, and answer live polls in class from the comfort of your homes.'},
    {img:'assets/images/services/class_training.png',name:'Classroom Training',about:'Step into a world of a comprehensive learning system that comprises in-person learning, homework, tests, and self review sheets with educators and classmates. Expand your horizons by learning about the newest trends to become the best version of yourselves by joining the best classroom training in Delhi. Our classroom training programs are an amalgamation of the best syllabi, expert educators, and the most impressive learning experiences.'},
    {img:'assets/images/services/schlorship.png',name:'Scholarship Programs',about:'Get closer to achieving your dreams by enrolling for BookMyShiksha scholarship programs. Our financial aid package is a combination of grant funds, student employment, and any potential external funds. When you qualify for one of our scholarship programs, we put together different resources together for a tailor made package that suits your needs.'},
    {img:'assets/images/services/cv.png',name:'Resume Building',about:'If you are looking to build a credible resume, our panel of experts will help you get the best credentials by participating in our courses to acquire a specialised set of skills that will be life changing. At BookMyShiksha, we will help you stand out from the rest by helping you build a fantastic resume for you to avail the best opportunities. '},
    {img:'assets/images/services/placement.png',name:'Placement Support',about:'We have partnered with multiple companies, and agencies to find the best possible placements for our students at startups, MNCs and conglomerates. Once a student finishes their certification with us, they will have a chance to work with some of the best companies worldwide.'},
    {img:'assets/images/services/practical.png',name:'Practical Approach',about:'Our promise to students at BookMyShiksha is a pragmatic approach to teaching, as well as finding employment opportunities post the course completion. We encourage our learners to apply the concepts that they learn within the classroom to the outside world to prosper in their fields.'},
    {img:'assets/images/services/interview.png',name:'Interview Prepration',about:'We have curated an efficient placement preparation test that helps students crack their interviews by participating in our training certifications in Delhi NCR. Our experts at the Delhi centre offer valuable insight on how to prepare, and appear for placement interviews is something we pride ourselves on.'},
    {img:'assets/images/services/carrier.png',name:'Career Guideline',about:'Whether you are looking to improve your skills by joining one of our online training courses in Delhi, or seeking to find the right career path, our educators at Book My Shiksha are here to guide you every step of the way by offering tips, and pointers to consider right from considering a career choice to helping you achieve it.'},
  ]

  
  
  upcomingCourses = [
    {date:10,month:'January',year:'2022',name:'Python with Data Science',about:'we are planning to start our fresh batch from 15th Jan, we will primarly focus on practical approach & provide documented intership after completion of the course',routerLink:'courses/data-science-training-course-in-delhincr'},
    {date:20,month:'January',year:'2022',name:'Diploma in DataScience',about:'we are planning to start our fresh batch from 30th Jan, we will primarly focus on practical approach & provide documented intership after completion of the course',routerLink:'courses/diploma-in-data-science-course-in-delhincr'},
    {date:25,month:'Feburary',year:'2022',name:'Web Development',about:'we are planning to start our fresh batch from 15th Feb, we will primarly focus on practical approach & provide documented intership after completion of the course',routerLink:'courses/html5-css3-js-course-in-delhincr'},
    {date:30,month:'Feburary',year:'2022',name:'Diploma in Machine learning',about:'we are planning to start our fresh batch from 20th Feb, We will primarly focus on practical approach & provide documented intership after completion of the course',routerLink:'courses/diploma-in-machine-learning-course-in-delhincr'},

  ]
  blogCards = [
    {id:1,name:'What is Data Science & How Does Data Science Works?',img:'assets/images/ds.jpg'},
    {id:1,name:'What is Data Science & How Does Data Science Works?',img:'assets/images/ds.jpg'},
    {id:1,name:'What is Data Science & How Does Data Science Works?',img:'assets/images/ds.jpg'},
  ]

  ngOnInit(): void {

  }
  currentIndex = 0
  filterCategory(value){
    this.currentIndex = value
  }

  expendCourses = false
  buttonValue = "View all courses"
  heading1:any
  heading2:any
  viewMoreCourses(){
    this.expendCourses = !this.expendCourses
    this.heading1 = document.getElementById('heading1')
    this.heading2 = document.getElementById('heading2')
    if (!this.expendCourses){
      this.buttonValue = "View all courses"
      this.heading1.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
    }
    if (this.expendCourses){
      this.buttonValue = "View less courses"
      this.heading2.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
    }
  }
  exploreCourses(){
    this.heading1 = document.getElementById('heading1')
    this.heading1.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
  });
  } 
  course:any = 0
  
edge_cards = [
  {
    name:'Real Time Resolution',
    about:'with Live Instructors',
    img:'assets/images/edge/realtime resolution.png'
  },
  {
    name:'Unlimited Access',
    about:'to Online Learning Repository',
    img:'assets/images/edge/unlimited access.png'
  },
  {
    name:'Learning Assistants',
    about:'to Guide When You Are Stuck',
    img:'assets/images/edge/learning assistants.png'
  },
  {
    name:'Track Your Growth',
    about:'Career Growth',
    img:'assets/images/edge/track your growth.png'
  },
  {
    name:'Self Assessment',
    about:'Preparation for Test',
    img:'assets/images/edge/self assesment.png'
  },
]

learning_partners = [
  'assets/images/learningPartners/amazon-web-services-logo-png-transparent.png',
  'assets/images/learningPartners/C_ITIL_4_Foundation88a23c79-2267-ec11-8f8f-000d3a271115.png',
  'assets/images/learningPartners/cisco-logo-transparent.png',
  'assets/images/learningPartners/google-partner-logo-2BA563BAC5-seeklogo.com.png',
  'assets/images/learningPartners/Microsoft_Azure-Logo.wine.png',
  'assets/images/learningPartners/red-hat-logo-png-transparent.png',
]

self_test = [
  {
    img:'assets/images/Self analysis Test-Bookmyshiksha/Questions.png',
    name:'1000+ questions'
  },
  {
    img:'assets/images/Self analysis Test-Bookmyshiksha/Mock-Up Test.png',
    name:'Mockup Tests'
  },
  {
    img:'assets/images/Self analysis Test-Bookmyshiksha/Time analysis.png',
    name:'Time Analysis'
  },
  {
    img:'assets/images/Self analysis Test-Bookmyshiksha/Score Analysis.png',
    name:'Score Analysis'
  },
  {
    img:'assets/images/Self analysis Test-Bookmyshiksha/QA explanation.png',
    name:'QA Explanation'
  },
  {
    img:'assets/images/Self analysis Test-Bookmyshiksha/detail explanation.png',
    name:'Detail Explanation'
  },
]

  



 

}
