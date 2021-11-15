import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';
import { OpenCourseComponent } from './components/open-course/open-course.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'courses', component:CoursesComponent},
  {path: 'contact', component:ContactUsComponent},
  {path:'openCourse', component:OpenCourseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
