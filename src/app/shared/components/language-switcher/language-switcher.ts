import { Component } from '@angular/core'
import { TranslocoService } from '@jsverse/transloco'
import { ButtonModule } from 'primeng/button'
import { LanguageServiceTs } from '../../../core/services/language.service'

@Component({
  selector: 'app-language-switcher',
  imports: [ButtonModule],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss'
})
export class LanguageSwitcher
{
  constructor(public translocoService: TranslocoService, private languageService: LanguageServiceTs) {}

  switchLanguage ()
  {
    const newLang=this.translocoService.getActiveLang()==='en'? 'sr':'en'
    this.languageService.switchLanguage(newLang)
  }

}
