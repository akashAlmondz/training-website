import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-qform',
  templateUrl: './qform.component.html',
  styleUrls: ['./qform.component.css']
})
export class QformComponent implements OnInit {
  formGroup:  FormGroup
  constructor( private formbuilder: FormBuilder , private dilog:MatDialog, private router:Router ) { 
    this.formGroup = this.formbuilder.group({
      name:['' , Validators.required ],
      email:['' ,[Validators.required, Validators.email ]],
      phone_no:['' ,[Validators.required,Validators.pattern('[6-9]\\d{9}')] ],
      course:['' , Validators.required ],
      
    })
   }

  ngOnInit(): void {
  }
  close(){
    this.dilog.closeAll()
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

      this.dilog.closeAll()
      this.router.navigate(['/thankyou'])
    }
  }

}
