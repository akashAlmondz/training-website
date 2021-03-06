import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  formGroup:  FormGroup
  constructor( private formbuilder: FormBuilder, private dilog:MatDialog ) { 
    this.formGroup = this.formbuilder.group({
      name:['' , Validators.required ],
      email:['' , Validators.required ],
      phone_no:['' , Validators.required , ],
      inquiry_type:[''],
      message:['']
      
    })
   }

  ngOnInit(): void {
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
        this.formGroup.reset()
    }
  }
}
