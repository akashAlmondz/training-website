import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 data = [
   {
     name:'Corporate Training',subHeading:'Reasons why we stand out:',about:['At BookMyShiksha we understand the importance of bridging the gap between the demand and supply of the workforce in the industry. As years have passed, organisations in India have understood the importance of pursuing online certification courses and how they enrich a learner’s skillset. We are proud to say that we are India’s leading company to offer online certification courses and serve organizations by offering training in specific or tailor made modules.'],points:['We have a thorough understanding of a corporation’s requirements by carrying out a  pre-assessment.','Next, we assess and understand the level of knowledge of the employees who are slated to be part of the program.','Every module is customised as per the requirement of the corporation.','Employees will participate in projects.','We offer assessment of each employee post the training and offer indications for areas of improvement.','We offer a completion certificate to a learner upon meeting all the criteria by completing the theoretical and practical sessions of the program.']
   },
   {
    name:'Industrial training',subHeading:'Reasons why we stand out:',about:['BookMyShiksha has become a pioneer for Industrial Training in India as we have the necessary facilities that are par excellence for learners and employees to pursue their respective courses. We bring together a stimulating yet nurturing ecosystem to train students to expand their skill set.'],points:['Our curriculum is in line with the demand of academia and the industry.','Our industrial training program deals with the novel areas of information technology and artificial intelligence amongst others.','Learners will be able to carry out efficient methods to improve a project or add impressive skills to their repertoire.','We offer assessment of each employee post the training and offer indications for areas of improvement.','We offer a completion certificate to a learner upon meeting all the criteria by completing the theoretical and practical sessions of the program.']
  },
  {
    name:'Classroom/Online Training',subHeading:'Reasons why we stand out:',about:['We offer the best online training and certifications that are accredited by our placement partners along with industry experts. Our courses are designed in a way to make you excel in your respective fields. We have students from across the globe. If you are looking for the best classroom/online training courses in Delhi, look no further and enroll today.'],points:['The experts at BookMyShiksha are top notch trainers who have ample experience.','Freshers and corporate trainees have the opportunity to learn from the basics to the advanced levels.','Our placement partners are some of the best organisations in the world.','We offer the best software courses in Delhi for you to add skills to your repertoire.','Our curriculum is formulated by industry experts.']
  },
 ]
}
