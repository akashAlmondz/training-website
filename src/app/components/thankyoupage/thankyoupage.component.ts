import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thankyoupage',
  templateUrl: './thankyoupage.component.html',
  styleUrls: ['./thankyoupage.component.css']
})
export class ThankyoupageComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  home(){
    this.router.navigate([''])
  }

}
