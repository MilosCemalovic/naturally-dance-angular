import { Component, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { Navigation } from './shared/components/navigation/navigation'
import { Footer } from './shared/components/footer/footer'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App
{
  protected readonly title=signal('naturally-dance');
}
