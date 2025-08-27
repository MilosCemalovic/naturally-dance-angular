import { AsyncPipe } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { TranslocoModule, TranslocoService } from '@jsverse/transloco'
import { CardModule } from 'primeng/card'
import { Observable } from 'rxjs'
import { DanceDataService } from '../../core/services/dance-data.service'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslocoModule, CardModule, AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit
{
  dances$: Observable<any>

  constructor(
    private danceDataService: DanceDataService,
    public transloco: TranslocoService
  )
  {
    this.dances$=this.danceDataService.dances$
  }

  ngOnInit (): void
  {
    this.danceDataService.loadDances().subscribe()
  }
}
