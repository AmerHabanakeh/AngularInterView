import { Component, ElementRef, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private translate: TranslateService, private language: LanguageService, private elementRef: ElementRef) {
    this.lang = this.translate.currentLang;
  }

  lang: any = localStorage.getItem('lang');
  showDropdown: boolean = false;
  changeLanguage(language: string) {
    if (language == "en") {
      localStorage.setItem("lang", "en");
      this.language.setLanguage(this.lang);
    }
    else {
      localStorage.setItem("lang", "ar");
      this.language.setLanguage(this.lang);
    }
    window.location.reload()
  }


  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.showDropdown = false;
    }
  }


}
