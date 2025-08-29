import { Component } from '@angular/core'
import { TranslocoModule } from '@jsverse/transloco'
import { LanguageSwitcher } from '../language-switcher/language-switcher'
import { ButtonModule } from 'primeng/button'

@Component({
  selector: 'app-header',
  imports: [TranslocoModule, LanguageSwitcher, ButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
