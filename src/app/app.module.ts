import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { SignuppageComponent } from './pages/signuppage/signuppage.component';

import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { SigninpageComponent } from './pages/signinpage/signinpage.component';
import { ArtformPagesComponent } from './pages/artform-pages/artform-pages.component';
import { SinglePagesComponent } from './pages/single-pages/single-pages.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactpageComponent,
    SignuppageComponent,
    NavbarComponent,
    FooterComponent,
    SigninpageComponent,
    ArtformPagesComponent,
    SinglePagesComponent,
    
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
