import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

  openedCertificate = 0
  showCertificate(value:number){
  this.openedCertificate = value
}

}
