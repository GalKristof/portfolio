import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { data } from '../data/data-list';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {

  lang: 'hu' | 'en';

  constructor(private languageService: LanguageService)
  {
    this.lang = this.languageService.language.value;
    this.languageService.language.subscribe(() => this.lang = this.languageService.language.value);
  }

  data = data;
  
  goToContact()
  {
    location.href = "#contact";
  }

  openCv()
  {
    window.open("https://galkristof.eu/KristofGal.pdf ");
  }
}
