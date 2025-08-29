import { Component } from '@angular/core'
import { MenubarModule } from 'primeng/menubar'
import { TranslocoModule } from '@jsverse/transloco'
import { LanguageSwitcher } from '../language-switcher/language-switcher'

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MenubarModule, TranslocoModule, LanguageSwitcher],
  templateUrl: './navigation.html',
  styleUrls: ['./navigation.scss']
})
export class Navigation {
  items = [
    { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
    { label: 'About Us', icon: 'pi pi-info-circle', routerLink: '/about' },
    { label: 'Events', icon: 'pi pi-calendar', routerLink: '/events' },
    { label: 'Contact', icon: 'pi pi-envelope', routerLink: '/contact' }
  ];
}