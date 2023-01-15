import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  constructor() { }
  links = [
    {img:'assets/images/fb.svg',link:'https://www.facebook.com/Bookmyshiksha01-101489145876529'},
    {img:'assets/images/lin.svg',link:'https://www.linkedin.com/company/80258695/admin/'},
    {img:'assets/images/insta.svg',link:'https://instagram.com/bookmyshiksha?igshid=YmMyMTA2M2Y='},
    {img:'assets/images/twt.svg',link:'https://twitter.com/bookmyshiksha'},
  ]
  ngOnInit(): void {
  }

}
