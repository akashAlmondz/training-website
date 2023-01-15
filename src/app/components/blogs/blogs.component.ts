import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { blogs } from 'src/app/blogs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }
  link = this.route.url
  
  blogs = blogs

  openBlog(cat:any,index:any){
    this.route.navigate(['/openBlogs',{cat:cat,index:index}])
    console.log(index)
  }
  
}
