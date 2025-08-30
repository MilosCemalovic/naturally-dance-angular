import { Component } from '@angular/core'
import { TranslocoService } from '@jsverse/transloco'
import { DropdownModule } from 'primeng/dropdown'
import { LanguageService } from '../../../core/services/language.service'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

interface LanguageOption {
  label: string
  value: string
  countryCode: string
}

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [DropdownModule, FormsModule, CommonModule],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss'
})
export class LanguageSwitcher {
  languages: LanguageOption[] = [
    {
      label: ' English',
      value: 'en',
      countryCode: 'gb',
    },
    {
      label: ' Srpski',
      value: 'sr',
      countryCode: 'rs',
    }
  ];

  selectedLanguage: LanguageOption

  constructor(public translocoService: TranslocoService, private languageService: LanguageService) {
    // Set initial selected language based on current active language
    const currentLang = this.translocoService.getActiveLang()
    this.selectedLanguage = this.languages.find(lang => lang.value === currentLang) || this.languages[0]
  }

  switchLanguage () {
    if (this.selectedLanguage) {
      this.languageService.switchLanguage(this.selectedLanguage.value)
    }
  }

}
