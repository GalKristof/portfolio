import { Component, HostListener } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { data } from '../data/data-list';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  lang: 'hu' | 'en';

  constructor(private languageService: LanguageService)
  {
    this.lang = this.languageService.language.value;
    this.languageService.language.subscribe(() => this.lang = this.languageService.language.value);
  }

  data = data;

  windowScrolled: boolean = false;

  userDeviceDarkMode: boolean | undefined;
  theme: "dark" | "light" |  undefined;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any){
    this.windowScrolled = window.pageYOffset > 20;
  }

  ngOnInit()
  {
    const darkModeMatcher = window.matchMedia('(prefers-color-scheme: dark)');
    if(!darkModeMatcher) this.theme = "dark";
    else{
      this.theme = darkModeMatcher.matches ? "dark" : "light";
    }

    this.applyClassToBody();

  }
  
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  changeTheme()
  {
    if(this.theme === "dark") this.theme = "light";
    else this.theme = "dark";
    return this.applyClassToBody();
  }

  applyClassToBody()
  {
    document.getElementsByTagName('body')[0].dataset['theme'] = this.theme;
  }

  changeLanguage()
  {
    if(this.lang === 'hu')
    {
      this.languageService.language.next('en');
    }
    else{
      this.languageService.language.next('hu');
    }
  }

  toggleRotate()
  {
    const toggler = document.getElementById("toggler");
    if(!toggler) return;

    if(toggler.classList.contains("rotate")) return toggler.classList.remove("rotate");
    return toggler.classList.add("rotate");
  }

  oppositeTheme()
  {
    if(this.theme === "dark") return "light";
    return "dark";
  }
}
