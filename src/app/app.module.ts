import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './utilites/header/header.component';
import { FooterComponent } from './utilites/footer/footer.component';
import { CoursesComponent } from './components/courses/courses.component';
import { SocialMediaComponent } from './utilites/social-media/social-media.component';
import { ContactComponent } from './utilites/contact/contact.component';
import { LinksComponent } from './utilites/links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CoursesComponent,
    SocialMediaComponent,
    ContactComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
