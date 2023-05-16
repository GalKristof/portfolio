import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public language: BehaviorSubject<'hu' | 'en'>;

  constructor() {
    const userLang = navigator.language.toLowerCase();
    const initialLang = userLang.includes('hu') ? 'hu' : 'en';
    this.language = new BehaviorSubject(initialLang);
  }
}
