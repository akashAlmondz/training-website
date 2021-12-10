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

  blogCards = [
    {id:1,name:'What is Data Science & How Does Data Science Works?',img:'assets/images/ds.jpg'},
    {id:1,name:'What is Data Science & How Does Data Science Works?',img:'assets/images/ds.jpg'},
    {id:1,name:'What is Data Science & How Does Data Science Works?',img:'assets/images/ds.jpg'},
  ]

  names = [
    'Cisco Certifications','AWS Certifications','Microsoft Certifications','CompTIA Certifications','LPI Certifications','Salesforce Certifications','Java Certifications','Cloudera Certifications','COBIT Certifications','Juniper Certifications','Citrix Certifications','SAS Certifications','EMC Certifications','Scrum Alliance Certifications','Scrum.org Certifications','HPE Certifications','Six Sigma Certifications','IBM Certifications','VMware Certifications','Oracle Certifications','Prince 2 Certification','ITIL Certifications','EC-Council (CEH, CHFI)','Check Point Certifications','Pega Systems Certifications','Informatica & ServiceNow','Testing Certifications','DevOps Institute','ISTQB Certifications','MSP Foundation & Practitioner','ISO 20000, 27001, 27002','SIAM Foundation']
   
  openedCertificate = 0
  showCertificate(value:number){
  this.openedCertificate = value
}

}
