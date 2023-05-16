import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { data } from '../data/data-list';

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.component.html',
  styleUrls: ['./motivation.component.scss']
})
export class MotivationComponent {

  lang: 'hu' | 'en';

  constructor(private languageService: LanguageService)
  {
    this.lang = this.languageService.language.value;
    this.languageService.language.subscribe(() => this.lang = this.languageService.language.value);
  }

  data = data;
}
