import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CertificationComponent } from './components/certification/certification.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { OpenBlogsComponent } from './components/open-blogs/open-blogs.component';
import { OpenCourseComponent } from './components/open-course/open-course.component';
import { PlacementComponent } from './components/placement/placement.component';
import { PolicyComponent } from './components/policy/policy.component';
import { TrainingComponent } from './components/training/training.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'contact', component:ContactUsComponent},
  {path:'courses/:id', component:OpenCourseComponent},
  {path:'training',component:TrainingComponent},
  {path:'aboutUs',component:AboutUsComponent},
  {path:'blogs',component:BlogsComponent},
  {path:'placement',component:PlacementComponent},
  {path:'certification',component:CertificationComponent},
  {path:'openBlogs',component:OpenBlogsComponent},
  {path:'company/:id',component:PolicyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration:'enabled'})],
  
  exports: [RouterModule]
  
})

export class AppRoutingModule { }
