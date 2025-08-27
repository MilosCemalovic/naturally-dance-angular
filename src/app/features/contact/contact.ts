import { Component } from '@angular/core'
import { TranslocoModule } from '@jsverse/transloco'
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'
import { InputTextModule } from 'primeng/inputtext'
import { TextareaModule } from 'primeng/textarea'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslocoModule, CardModule, InputTextModule, TextareaModule, ButtonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact
{

}
