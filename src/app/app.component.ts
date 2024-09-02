import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './website/components/header/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lang!: any;
  constructor(private translate: TranslateService, private language: LanguageService) {

    if ("lang" in localStorage) {
      this.lang = localStorage.getItem("lang");
      translate.use(this.lang);
      this.language.setLanguage(this.lang);

    } else {
      translate.use(this.translate.defaultLang);
      this.language.setLanguage(this.lang);
    }
  }
  title = 'AngularInterview';
}
