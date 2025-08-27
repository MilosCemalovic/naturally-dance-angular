import { Component } from '@angular/core'
import { TranslocoModule } from '@jsverse/transloco'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer
{

}
