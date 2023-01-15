import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogs } from 'src/app/blogs';

@Component({
  selector: 'app-open-blogs',
  templateUrl: './open-blogs.component.html',
  styleUrls: ['./open-blogs.component.css']
})
export class OpenBlogsComponent implements OnInit {

  constructor(
    private router:ActivatedRoute
  ) { }
  cat = 0
  index = 0
  blog:any
  

  ngOnInit(): void {
    this.router.params.subscribe(x=>{
    this.blog = blogs[Number(x['cat'])][Number(x['index'])]
      console.log(x['cat'])
    })
  }
  

}
