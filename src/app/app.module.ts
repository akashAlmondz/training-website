import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './utilites/header/header.component';
import { FooterComponent } from './utilites/footer/footer.component';
import { SocialMediaComponent } from './utilites/social-media/social-media.component';
import { ContactComponent } from './utilites/contact/contact.component';
import { LinksComponent } from './utilites/links/links.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { OpenCourseComponent } from './components/open-course/open-course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TrainingComponent } from './components/training/training.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { QformComponent } from './components/qform/qform.component';
import { PlacementComponent } from './components/placement/placement.component';
import { CertificationComponent } from './components/certification/certification.component';
import { OpenBlogsComponent } from './components/open-blogs/open-blogs.component';
import { PolicyComponent } from './components/policy/policy.component';
import {MatDialogModule} from '@angular/material/dialog';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { FormAComponent } from './utilites/form-a/form-a.component';
import { SupportComponent } from './utilites/support/support.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SocialMediaComponent,
    ContactComponent,
    LinksComponent,
    ContactUsComponent,
    OpenCourseComponent,
    AboutUsComponent,
    TrainingComponent,
    BlogsComponent,
    TestimonialsComponent,
    QformComponent,
    PlacementComponent,
    CertificationComponent,
    OpenBlogsComponent,
    PolicyComponent,
    FormAComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
