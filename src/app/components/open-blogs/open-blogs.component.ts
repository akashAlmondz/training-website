import { Component, OnInit } from '@angular/core';
import { blogs } from 'src/app/blogs';

@Component({
  selector: 'app-open-blogs',
  templateUrl: './open-blogs.component.html',
  styleUrls: ['./open-blogs.component.css']
})
export class OpenBlogsComponent implements OnInit {

  constructor() { }
  cat = localStorage.getItem('blogCat');
  index = localStorage.getItem('blogIndex')
  blog = blogs[Number(this.cat)][Number(this.index)]
  

  ngOnInit(): void {

  }
  

}
