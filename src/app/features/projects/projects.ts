import { Component } from '@angular/core'
import { TranslocoModule } from '@jsverse/transloco'
import { CardModule } from 'primeng/card'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslocoModule, CardModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

}
