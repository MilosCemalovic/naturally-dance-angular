import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { Navigation } from './shared/components/navigation/navigation'
import { Footer } from './shared/components/footer/footer'
import { TranslocoService } from '@jsverse/transloco'
import { LanguageService } from './core/services/language.service'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  constructor(
    private translocoService: TranslocoService,
    private languageService: LanguageService
  ) {}

  ngOnInit () {
    // Initialize language from localStorage
    this.languageService.initializeLanguage()

    // Check if translations are loading
    this.translocoService.selectTranslate('navigation.home').subscribe(translation => {
      console.log('Translation for navigation.home - log from app.ts:', translation)
    })

    // Check active language
    console.log('Active language - log from app.ts:', this.translocoService.getActiveLang())

    // Check available languages
    console.log('Available languages - log from app.ts:', this.translocoService.getAvailableLangs())
  }
}