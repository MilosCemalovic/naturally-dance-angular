import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs'
import { TranslocoService } from '@jsverse/transloco'

export interface DanceStyle {
  id: number
  name: string
  category: string
  descriptionKey: string
}

@Injectable({
  providedIn: 'root'
})
export class DanceDataService {
  private dancesSubject = new BehaviorSubject<DanceStyle[]>([]);
  public dances$ = this.dancesSubject.asObservable();

  constructor(
    private http: HttpClient,
    private translocoService: TranslocoService
  ) {}

  loadDances (): Observable<DanceStyle[]> {
    const staticDances: DanceStyle[] = [
      {
        id: 1,
        name: 'Samba',
        category: 'Latin',
        descriptionKey: 'dancesList.samba.description'
      },
      {
        id: 2,
        name: 'Rumba',
        category: 'Latin',
        descriptionKey: 'dancesList.rumba.description'
      },
      {
        id: 3,
        name: 'Cha Cha Cha',
        category: 'Latin',
        descriptionKey: 'dancesList.chaChaCha.description'
      },
      {
        id: 4,
        name: 'Jive',
        category: 'Latin',
        descriptionKey: 'dancesList.jive.description'
      },
      {
        id: 5,
        name: 'English Waltz',
        category: 'Ballroom',
        descriptionKey: 'dancesList.englishWaltz.description'
      },
      {
        id: 6,
        name: 'Viennese Waltz',
        category: 'Ballroom',
        descriptionKey: 'dancesList.vienneseWaltz.description'
      },
      {
        id: 7,
        name: 'Foxtrot',
        category: 'Ballroom',
        descriptionKey: 'dancesList.foxtrot.description'
      },
      {
        id: 8,
        name: 'Salsa',
        category: 'Caribbean',
        descriptionKey: 'dancesList.salsa.description'
      },
      {
        id: 9,
        name: 'Bachata',
        category: 'Caribbean',
        descriptionKey: 'dancesList.bachata.description'
      },
      {
        id: 10,
        name: 'Merengue',
        category: 'Caribbean',
        descriptionKey: 'dancesList.merengue.description'
      },
      {
        id: 11,
        name: 'Kizomba',
        category: 'African',
        descriptionKey: 'dancesList.kizomba.description'
      },
      {
        id: 12,
        name: 'Blues',
        category: 'Social',
        descriptionKey: 'dancesList.blues.description'
      },
      {
        id: 13,
        name: 'Disco',
        category: 'Social',
        descriptionKey: 'dancesList.disco.description'
      },
      {
        id: 14,
        name: 'R\'n\'R',
        category: 'Rock',
        descriptionKey: 'dancesList.rnr.description'
      },
      {
        id: 15,
        name: 'Sirtaki',
        category: 'Greek',
        descriptionKey: 'dancesList.sirtaki.description'
      }
    ]

    return of(staticDances).pipe(
      tap(dances => this.dancesSubject.next(dances)),
      catchError(error => {
        console.error('Error loading dances:', error)
        return of([])
      })
    )
  }

  getDanceById (id: number): Observable<DanceStyle | undefined> {
    return this.dances$.pipe(
      map(dances => dances.find(dance => dance.id === id))
    )
  }

  filterDancesByCategory (category: string): Observable<DanceStyle[]> {
    return this.dances$.pipe(
      map(dances => dances.filter(dance => dance.category === category))
    )
  }

  // Helper method to get translated description
  getTranslatedDescription (dance: DanceStyle): string {
    return this.translocoService.translate(dance.descriptionKey)
  }
}