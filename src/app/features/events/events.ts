import { Component } from '@angular/core'
import { TranslocoModule } from '@jsverse/transloco'
import { CardModule } from 'primeng/card'

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [TranslocoModule, CardModule],
  templateUrl: './events.html',
  styleUrl: './events.scss'
})
export class Events {

}
