import { Component, OnInit, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { Navigation } from './shared/components/navigation/navigation'
import { Footer } from './shared/components/footer/footer'
import { TranslocoService } from '@jsverse/transloco'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  constructor(private translocoService: TranslocoService) {}

  ngOnInit () {
    // Check if translations are loading
    this.translocoService.selectTranslate('navigation.home').subscribe(translation => {
      console.log('Translation for navigation.home:', translation)
    })

    // Check active language
    console.log('Active language:', this.translocoService.getActiveLang())

    // Check available languages
    console.log('Available languages:', this.translocoService.getAvailableLangs())
  }
}
