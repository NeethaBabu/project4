import { Component } from '@angular/core';
import { data } from 'src/assets/data';
import { ActivatedRoute,Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-artform-pages',
  templateUrl: './artform-pages.component.html',
  styleUrls: ['./artform-pages.component.css']
})
export class ArtformPagesComponent {
  
  ngOninit():void
  {
   
  }

  constructor(private router: Router ,
    private hero: HeroService) {  }
    artform=this.hero.giveData();
gotoHere(id:any)
{
  localStorage.setItem('id',id);
  this.router.navigate(['/single']);
}
}


