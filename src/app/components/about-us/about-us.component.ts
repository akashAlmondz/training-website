import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  partners = [
    "assets/images/WebCluesInfotech-Logo.png",
    "assets/images/enfochips.png",
    "assets/images/uniqueData.png",
    "assets/images/seabornTech.png",
    "assets/images/cssinfoTech.png",
    "assets/images/logo.jpg"
  ]

  colleges = [
    "assets/images/svn.png",
    "assets/images/acet.jpg",
    "assets/images/iiitJaipur.png",
    "assets/images/niet.png",
    "assets/images/krm.svg",
    "assets/images/glb.jpg",
  ]

}
