import { AsyncPipe } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { TranslocoModule, TranslocoService } from '@jsverse/transloco'
import { CardModule } from 'primeng/card'
import { Observable } from 'rxjs'
import { DanceDataService } from '../../core/services/dance-data.service'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslocoModule, CardModule, AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  dances$: Observable<any>

  constructor(
    private danceDataService: DanceDataService,
    private translocoService: TranslocoService
  ) {
    this.dances$ = this.danceDataService.dances$
  }

  ngOnInit () {
    this.danceDataService.loadDances().subscribe()
  }

  getTranslatedDescription (dance: any): string {
    return this.translocoService.translate(dance.descriptionKey)
  }
}
