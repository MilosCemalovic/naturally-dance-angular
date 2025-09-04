import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslocoModule } from '@jsverse/transloco'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslocoModule, CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class Footer {

}