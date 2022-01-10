import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  constructor() { }
  links = [
    {img:'assets/images/fb.svg',link:''},
    {img:'assets/images/lin.svg',link:'https://www.linkedin.com/in/bookmy-shiksha-988610229/'},
    {img:'assets/images/insta.svg',link:'https://www.instagram.com/bookmyshiksha/'},
    {img:'assets/images/twt.svg',link:'https://twitter.com/bookmyshiksha'},
  ]
  ngOnInit(): void {
  }

}
