import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  private directionSubject = new BehaviorSubject<string>('ltr');
  direction = this.directionSubject.asObservable();

  setLanguage(lang: string) {
    const direction = lang === 'ar' ? 'rtl' : 'ltr';
    this.directionSubject.next(direction);
    document.documentElement.dir = direction;
  }
}
