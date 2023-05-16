import { Component } from '@angular/core';
import { skillList } from '../data/skill-list';
import { LanguageService } from '../services/language.service';
import { data } from '../data/data-list';

@Component({
  selector: 'app-know-me',
  templateUrl: './know-me.component.html',
  styleUrls: ['./know-me.component.scss']
})
export class KnowMeComponent {
  public skillList = skillList;

  lang: 'hu' | 'en';

  constructor(private languageService: LanguageService)
  {
    this.lang = this.languageService.language.value;
    this.languageService.language.subscribe(() => this.lang = this.languageService.language.value);
  }

  data = data;
  
}
