import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtformPagesComponent } from './pages/artform-pages/artform-pages.component';

import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SigninpageComponent } from './pages/signinpage/signinpage.component';
import { SignuppageComponent } from './pages/signuppage/signuppage.component';
import { SinglePagesComponent } from './pages/single-pages/single-pages.component';



const routes: Routes = [
  {
    path:'',component:HomepageComponent
  },
  {
    path:'contact',component :ContactpageComponent
  },
  {
    path:'signin',component :SigninpageComponent
  },
  {
    path:'signup',component:SignuppageComponent
  },
  {
    path:'single',component:SinglePagesComponent
  },
  {
    path:'artform',component:ArtformPagesComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
