import { Component } from '@angular/core'
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { TranslocoModule } from '@jsverse/transloco'
import { ButtonModule } from 'primeng/button'
import { FloatLabelModule } from 'primeng/floatlabel'
import { CardModule } from 'primeng/card'
import { InputTextModule } from 'primeng/inputtext'
import { TextareaModule } from 'primeng/textarea'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    TranslocoModule,
    CardModule,
    InputTextModule,
    TextareaModule,
    ButtonModule,
    FloatLabelModule,
    FormsModule,
    ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  contactForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    })
  }

  onSubmit () {
    if (this.contactForm.valid) {
      console.log('Form submitted - log from contact component.ts:', this.contactForm.value)
      // Here you would typically send the form data to your backend
      alert('Message sent successfully!')
      this.contactForm.reset()
    }
  }
}
