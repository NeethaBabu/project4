import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-signinpage',
  templateUrl: './signinpage.component.html',
  styleUrls: ['./signinpage.component.css']
})
export class SigninpageComponent {


  constructor(private hero:HeroService){}
  data=this.hero.giveData()
}
