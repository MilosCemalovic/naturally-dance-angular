import { Component } from '@angular/core'
import { TranslocoModule } from '@jsverse/transloco'
import { ButtonModule } from 'primeng/button'

@Component({
  selector: 'app-header',
  imports: [TranslocoModule, ButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
