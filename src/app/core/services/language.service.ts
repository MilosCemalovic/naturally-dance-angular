import { Injectable } from '@angular/core'
import { TranslocoService } from '@jsverse/transloco'

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceTs
{
  constructor(private translocoService: TranslocoService) {}

  switchLanguage (language: string): void
  {
    this.translocoService.setActiveLang(language)
    localStorage.setItem('preferredLanguage', language)
  }

  getCurrentLanguage (): string
  {
    return this.translocoService.getActiveLang()
  }

  initializeLanguage (): void
  {
    const savedLanguage=localStorage.getItem('preferredLanguage')
    const defaultLanguage='en'
    // const languageToSet = savedLanguage || defaultLanguage

    if (savedLanguage&&this.translocoService.isLang(savedLanguage))
    {
      // this.translocoService.setActiveLang(languageToSet)
      this.translocoService.setActiveLang(savedLanguage)
    }
  }
}
