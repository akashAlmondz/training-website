import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  constructor() { }
  links = [
    {img:'assets/images/fb.svg'},
    {img:'assets/images/lin.svg'},
    {img:'assets/images/insta.svg'},
    {img:'assets/images/twt.svg'},
  ]
  ngOnInit(): void {
  }

}
