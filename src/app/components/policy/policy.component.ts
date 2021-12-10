import { Component, OnInit } from '@angular/core';
import { policy } from 'src/app/companyPolicy';
@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

  constructor() { }
  content = policy.disclaimer
  ngOnInit(): void {
  }

}
