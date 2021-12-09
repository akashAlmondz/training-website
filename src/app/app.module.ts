import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    PolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
