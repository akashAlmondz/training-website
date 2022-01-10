import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeoService } from './services/seo.service';
import { Titles } from './titles&meta';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private routeLink:Router, private seoService: SeoService ){}
  title = 'BookMyShiksha';
  scrollToTop(){
      window.scrollTo(0,0)
  }
  currentUrl:string = ''
  seoData = ''
  currentTitle 
  currentMetaTags
  ngOnInit() {
    setTimeout(() => {
    this.currentUrl = this.routeLink.url;
    this.seoData = Titles[this.currentUrl];
    this.currentTitle = Object.values(this.seoData)[0];
    this.currentMetaTags =Object.values(this.seoData)[1];
    this.seoService.updateTitle(this.currentTitle);
    this.seoService.updateMetaTags(this.currentMetaTags);
    console.log(this.currentTitle);
    console.log(this.currentMetaTags);
    }, 0);
  }
  getUrl(){
    this.currentUrl = this.routeLink.url;
    this.seoData = Titles[this.currentUrl];
    this.currentTitle = Object.values(this.seoData)[0];
    this.currentMetaTags =Object.values(this.seoData)[1];
    this.seoService.updateTitle(this.currentTitle);
    this.seoService.updateMetaTags(this.currentMetaTags);
    console.log(this.currentTitle);
    console.log(this.currentMetaTags);
  };

    
}
