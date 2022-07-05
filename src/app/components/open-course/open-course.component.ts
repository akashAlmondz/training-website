import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { courses } from 'src/app/courses';
import { QformComponent } from '../qform/qform.component';

@Component({
  selector: 'app-open-course',
  templateUrl: './open-course.component.html',
  styleUrls: ['./open-course.component.css']
})
export class OpenCourseComponent implements OnInit {
  formGroup:  FormGroup
  constructor(private formbuilder: FormBuilder, private router:ActivatedRoute, private dilog:MatDialog) {
    this.formGroup = this.formbuilder.group({
      name:['' , Validators.required ],
      email:['' , Validators.email ],
      phone_no:['' , Validators.required , ],
      course:['' , Validators.required ],
      training_mode:['' ],
      message:[''],
    })

   }
  course

  ngOnInit(): void {
    let indexNo = {
      'python-training-course':0,
      'data-science-training-course':1,
      'machine-learning-training-course':2,
      'deep-learning-training-course':3,
      'artificial-inteligence-training-course':4,
      'diploma-in-data-science-course':5,
      'diploma-in-machine-learning-course':6,
      'masters-in-data-science-course':7,
      'masters-in-machine-learning-course':8,
      'seo-course':9,
      'rpa-course':10,
      'java-course':11,
      '.net-course':12,
      'vba-course':13,
      'php-course':14,
      'html5-css3-js-course':15,
      'angular-course':16,
      'nodejs-course':17,
      'react-course':18,
      'pyhton-django-course':19,
      'mongodb-course':20,
      'sql-course':21,
      'oracle-course':22,
      'powerBi-course':23,
      'tableau-course':24,
      'social-media-optimization-course':25,
      'pay-per-click-course':26,
      'google-ads-certification-course':27,
      'facebook_ads_certification-course':28,
      'social-media-promotion-course':29,
      'email-marketing-course':30,
    }
    this.router.paramMap.subscribe((x:any) => {
      let index = indexNo[x.params.id]
      this.course = courses[index]
    })
  }

  note = 'Details mentioned below is just a cover or as we say in layman language important points ,  to know the detailed curriculam you have to visit our company or download the curriculam. All the content mentioned in the website is up to date with the present technologies.' 
courseFeatures = [
  {img:'fas fa-laptop-code',name:'Hands-On exposer to code'},
  {img:'fas fa-file-certificate',name:'Certification Program'},
  {img:'fas fa-user-headset',name:'Connect with our Experts'},
  {img:'fas fa-atlas',name:'orientation program'},
  {img:'fas fa-sign-in-alt',name:'Lifetime Access'},
  {img:'fas fa-hands-helping',name:'Carrer guiedlines'},
]

processCard = [
  {id:1,name:'Fill the application form', about:'Jump start your learning journey by filling up the form'},
  {id:2,name:'Interview Process', about:'Test your skill by going through screening call with our interviewers'},
  {id:3,name:'Join program', about:'We will provide you with our traditional practical approach & when you are ready, we furthermore provide you intership.'},
]





activeSection = 0
openedCard = 0
openedCertificate = 0

active(num:any){
  this.activeSection=num
}

openCard(num:any){
  this.openedCard = num 
}

showCertificate(value:number){
  this.openedCertificate = value
}


enrollNow(){
  this.dilog.open(QformComponent)
}


public sendEmail(e: Event) {
  if(this.formGroup.valid){
    e.preventDefault();
    emailjs.sendForm('service_aipwx2p', 'template_1zzd3fa', e.target as HTMLFormElement,'iIs0bOL0lq6QkvGvG'  )
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your form has been submitted',
        showConfirmButton: false,
        timer: 1500
      })
      this.dilog.closeAll()
      this.formGroup.reset()
  }
}
}
