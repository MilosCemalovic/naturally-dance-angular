import { Injectable } from '@angular/core'
import { TranslocoService } from '@jsverse/transloco'

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(private translocoService: TranslocoService) {}

  switchLanguage (language: string) {
    console.log('Switching language to:', language)
    this.translocoService.setActiveLang(language)
    localStorage.setItem('preferredLanguage', language)
  }

  getCurrentLanguage (): string {
    return this.translocoService.getActiveLang()
  }

  initializeLanguage () {
    const savedLanguage = localStorage.getItem('preferredLanguage')
    if (savedLanguage && this.translocoService.isLang(savedLanguage)) {
      this.translocoService.setActiveLang(savedLanguage)
    }
  }
}