import { Injectable } from '@angular/core'
import { TranslocoService } from '@jsverse/transloco'

@Injectable({
  providedIn: 'root'
})
export class LanguageService
{
  constructor(private translocoService: TranslocoService) {}

  switchLanguage (language: string)
  {
    this.translocoService.setActiveLang(language)
    localStorage.setItem('preferredLanguage', language)

    // Reload the page to ensure all content is translated
    window.location.reload()
  }

  getCurrentLanguage (): string
  {
    return this.translocoService.getActiveLang()
  }

  initializeLanguage ()
  {
    const savedLanguage=localStorage.getItem('preferredLanguage')
    if (savedLanguage&&this.translocoService.isLang(savedLanguage)) {
      this.translocoService.setActiveLang(savedLanguage)
    }
  }
}