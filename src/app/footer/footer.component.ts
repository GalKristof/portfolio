import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { data } from '../data/data-list';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  thisYear = new Date().getFullYear();

  lang: 'hu' | 'en';

  constructor(private languageService: LanguageService)
  {
    this.lang = this.languageService.language.value;
    this.languageService.language.subscribe(() => this.lang = this.languageService.language.value);
  }

  data = data;
}
