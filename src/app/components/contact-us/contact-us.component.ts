import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  formGroup:  FormGroup
  constructor( private formbuilder: FormBuilder, private dilog:MatDialog , private router:Router) { 
    this.formGroup = this.formbuilder.group({
      name:['' , Validators.required ],
      email:['' ,[Validators.required, Validators.email ]],
      phone_no:['' ,[Validators.required,Validators.pattern('[6-9]\\d{9}')] ],
      inquiry_type:['',Validators.required],
      
    })
   }

  ngOnInit(): void {
  }

  public sendEmail(e: Event) {
    if(this.formGroup.valid){
      e.preventDefault();
      emailjs.sendForm('service_aipwx2p', 'template_hsp7wvp', e.target as HTMLFormElement,'iIs0bOL0lq6QkvGvG'  )
        .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      localStorage.setItem('formSubmit', 'true')

      this.router.navigate(['/thankyou'])
    }
  }
}
