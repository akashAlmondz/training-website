import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { policy } from 'src/app/companyPolicy';
@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }
  content

  ngOnInit(): void {

    this.router.paramMap.subscribe((x:any) => {
      this.content = policy[x.params.id]
    })
  }

}
