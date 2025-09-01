import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslocoModule } from '@jsverse/transloco'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslocoModule, CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class Footer implements OnInit {
  @ViewChild('footerElement') footerElement!: ElementRef

  ngOnInit () {
    // Initial check in case footer is already in view
    setTimeout(() => this.checkScroll(), 100)
  }

  @HostListener('window:scroll', [])
  onWindowScroll () {
    this.checkScroll()
  }

  checkScroll () {
    if (!this.footerElement) return

    const element = this.footerElement.nativeElement
    const elementPosition = element.getBoundingClientRect().top
    const screenPosition = window.innerHeight / 1.3 // Trigger when ⅓ from bottom

    if (elementPosition < screenPosition) {
      element.classList.add('animate')
    }
  }
}