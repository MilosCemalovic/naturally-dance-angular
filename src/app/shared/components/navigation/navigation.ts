import { Component, OnDestroy, OnInit } from '@angular/core'
import { MenubarModule } from 'primeng/menubar'
import { TranslocoModule, TranslocoService } from '@jsverse/transloco'
import { LanguageSwitcher } from '../language-switcher/language-switcher'
import { CommonModule } from '@angular/common'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MenubarModule, TranslocoModule, LanguageSwitcher, CommonModule],
  templateUrl: './navigation.html',
  styleUrls: ['./navigation.scss']
})
export class Navigation implements OnInit, OnDestroy {
  items: any[] = [];
  private langChangeSubscription: Subscription | null = null;
  private translationLoadSubscription: Subscription | null = null;

  constructor(
    private translocoService: TranslocoService
  ) {}

  ngOnInit () {
    // Initial load
    this.updateNavigationItems()

    // Subscribe to language changes
    this.langChangeSubscription = this.translocoService.langChanges$.subscribe(() => {
      this.updateNavigationItems()
    })

    // Also subscribe to translation load events
    this.translationLoadSubscription = this.translocoService.events$.subscribe(event => {
      if (event.type === 'translationLoadSuccess') {
        this.updateNavigationItems()
      }
    })
  }

  updateNavigationItems () {
    // Use a try-catch to handle any translation errors
    try {
      const currentLang = this.translocoService.getActiveLang()
      console.log('Updating navigation for language:', currentLang)

      this.items = [
        {
          label: this.translocoService.translate('navigation.home'),
          icon: 'pi pi-home',
          routerLink: '/'
        },
        {
          label: this.translocoService.translate('navigation.about'),
          icon: 'pi pi-info-circle',
          routerLink: '/about'
        },
        {
          label: this.translocoService.translate('navigation.events'),
          icon: 'pi pi-calendar',
          routerLink: '/events'
        },
        {
          label: this.translocoService.translate('navigation.contact'),
          icon: 'pi pi-envelope',
          routerLink: '/contact'
        }
      ]
    } catch (error) {
      console.error('Error updating navigation items:', error)
      // Fallback to default labels
      this.items = [
        { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
        { label: 'About Us', icon: 'pi pi-info-circle', routerLink: '/about' },
        { label: 'Events', icon: 'pi pi-calendar', routerLink: '/events' },
        { label: 'Contact', icon: 'pi pi-envelope', routerLink: '/contact' }
      ]
    }
  }

  ngOnDestroy () {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe()
    }
    if (this.translationLoadSubscription) {
      this.translationLoadSubscription.unsubscribe()
    }
  }
}