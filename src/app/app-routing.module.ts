import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CertificationComponent } from './components/certification/certification.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OffersComponent } from './components/offers/offers.component';
import { OpenBlogsComponent } from './components/open-blogs/open-blogs.component';
import { OpenCourseComponent } from './components/open-course/open-course.component';
import { PlacementComponent } from './components/placement/placement.component';
import { PolicyComponent } from './components/policy/policy.component';
import { ThankyoupageComponent } from './components/thankyoupage/thankyoupage.component';
import { TrainingComponent } from './components/training/training.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'contact', component:ContactUsComponent},
  {path:'courses/:id', component:OpenCourseComponent},
  {path:'training',component:TrainingComponent},
  {path:'aboutUs',component:AboutUsComponent},
  {path:'blogs',component:BlogsComponent,data:{cat:'',index:''}},
  {path:'placement',component:PlacementComponent},
  {path:'certification',component:CertificationComponent},
  {path:'openBlogs',component:OpenBlogsComponent,data:{cat:'',index:''}},
  {path:'company/:id',component:PolicyComponent},
  {path:'test', component:OffersComponent},
  {path:'thankyou',component:ThankyoupageComponent},
  {path:'**',component:NotFoundComponent,pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration:'enabled'
  })],
  
  exports: [RouterModule]
  
})

export class AppRoutingModule { }
