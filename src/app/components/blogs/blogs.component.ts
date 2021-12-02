import { Component, OnInit } from '@angular/core';
import { blogs } from 'src/app/blogs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  blogs = blogs
  cat:any = ''
  index:any = 0

  openBlog(cat:any,index:any){
    this.cat = cat;
    this.index = this.blogs[cat].indexOf(index)
    localStorage.setItem('blogIndex',this.index)
    localStorage.setItem('blogCat',this.cat)
    console.log(this.cat,this.index)
  }
  
}
