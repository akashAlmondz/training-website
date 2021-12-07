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
    {name:'Projects',value:'3500+',icon:'fas fa-edit'},
    {name:'Satisfied Learners',value:'61,640',icon:'far fa-user'},
    {name:'Assignments',value:'25,000+',icon:'far fa-file-code'},
    {name:'Hours Classes',value:'250,000+',icon:'far fa-clock'},
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
    {name:'Diploma in Data Science',img:'assets/images/diplomaDS.png'},
    {name:'Diploma in Machine Learning',img:'assets/images/diplomaML.png'},
    {name:'Masters in Data science',img:'assets/images/mastersDS.png'},
    {name:'Masters in Machine Learning',img:'assets/images/mastersML.png'},
    {name:'Digital Marketing',img:'assets/images/dm.png'},
    {name:'RPA',img:'assets/images/robotics.png'},
    {name:'Java',img:'assets/images/java.png'},
    {name:'.Net',img:'assets/images/website.png'},
    {name:'VBA',img:'assets/images/vba.png'},
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
  ]

  servicesCards = [
    {img:'assets/images/earth-globe.svg',name:'Online Training',about:'At Book My Shiksha, you will be able to get top notch training and skill development programs from tutors across the world. The courses are curated by experts from relevant fields. Learn at your desired pace, with lifetime access to live, and recorded sessions. At Book My Shiksha, you will be able to ask your educators questions, chat with your peers, and answer live polls in class from the comfort of your homes.'},
    {img:'assets/images/exam.svg',name:'Classroom Training',about:'Step into a world of a comprehensive learning system that comprises in-person learning, homework, tests, and self review sheets with educators and classmates. Expand your horizons by learning about the newest trends to become the best version of yourselves by joining the best classroom training in Delhi. Our classroom training programs are an amalgamation of the best syllabi, expert educators, and the most impressive learning experiences.'},
    {img:'assets/images/books.svg',name:'Scholarship Programs',about:'Get closer to achieving your dreams by enrolling for Book My Shiksha scholarship programs. Our financial aid package is a combination of grant funds, student employment, and any potential external funds. When you qualify for one of our scholarship programs, we put together different resources together for a tailor made package that suits your needs.'},
    {img:'assets/images/professor.svg',name:'Resume Building',about:'If you are looking to build a credible resume, our panel of experts will help you get the best credentials by participating in our courses to acquire a specialised set of skills that will be life changing. At Book My Shiksha, we will help you stand out from the rest by helping you build a fantastic resume for you to avail the best opportunities. '},
    {img:'assets/images/blackboard.svg',name:'Placement Support',about:'We have partnered with multiple companies, and agencies to find the best possible placements for our students at startups, MNCs and conglomerates. Once a student finishes their certification with us, they will have a chance to work with some of the best companies worldwide.'},
    {img:'assets/images/books.svg',name:'Practical Approach',about:'Our promise to students at Book My Shiksha is a pragmatic approach to teaching, as well as finding employment opportunities post the course completion. We encourage our learners to apply the concepts that they learn within the classroom to the outside world to prosper in their fields.'},
    {img:'assets/images/mortarboard.svg',name:'Interview Prepration',about:'We have curated an efficient placement preparation test that helps students crack their interviews by participating in our training certifications in Delhi NCR. Our experts at the Delhi centre offer valuable insight on how to prepare, and appear for placement interviews is something we pride ourselves on.'},
    {img:'assets/images/earth-globe.svg',name:'Career Guideline',about:'Whether you are looking to improve your skills by joining one of our online training courses in Delhi, or seeking to find the right career path, our educators at Book My Shiksha are here to guide you every step of the way by offering tips, and pointers to consider right from considering a career choice to helping you achieve it.'},
  ]

  

  upcomingCourses = [
    {date:'07',month:'December',name:'Python',about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequuntur, praesentium delectus voluptatum dolorem eligendi labore sunt fuga pariatur modi, beatae, culpa tempora. Accusamus in doloremque rerum corrupti voluptate consequatur?'},
    {date:'09',month:'January',name:'Machine learning',about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequuntur, praesentium delectus voluptatum dolorem eligendi labore sunt fuga pariatur modi, beatae, culpa tempora. Accusamus in doloremque rerum corrupti voluptate consequatur?'},
    {date:'30',month:'Feburary',name:'Deep Learning',about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequuntur, praesentium delectus voluptatum dolorem eligendi labore sunt fuga pariatur modi, beatae, culpa tempora. Accusamus in doloremque rerum corrupti voluptate consequatur?'},
    {date:'07',month:'March',name:'Web Development',about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequuntur, praesentium delectus voluptatum dolorem eligendi labore sunt fuga pariatur modi, beatae, culpa tempora. Accusamus in doloremque rerum corrupti voluptate consequatur?'},

  ]
  blogCards = [
    {id:1,name:'What is Data Science & How Does Data Science Works?',img:'assets/images/ds.jpg'},
    {id:1,name:'What is Data Science & How Does Data Science Works?',img:'assets/images/ds.jpg'},
    {id:1,name:'What is Data Science & How Does Data Science Works?',img:'assets/images/ds.jpg'},
  ]

  ngOnInit(): void {
  }

  expendCourses = false
  viewMoreCourses(){
    this.expendCourses = !this.expendCourses
    if (!this.expendCourses){
      window.scrollTo(0,820)
    }
    if (this.expendCourses){

      window.scrollTo(0,1350)
    }
      
  }
  course:any = 0
  selectedCourse(value:any){
    this.course = this.coursesCards.indexOf(value)
    localStorage.setItem('courseIndex',this.course)
  }

  



 

}
