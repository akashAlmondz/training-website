import { Component, OnInit, Inject, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor( ){}
  title = 'BookMyShiksha';
  scrollToTop(){
      window.scrollTo(0,0)
  }
    ngOnInit() {}

    
}
