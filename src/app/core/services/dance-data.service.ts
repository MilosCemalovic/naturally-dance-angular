import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs'

export interface DanceStyle
{
  id: number
  name: string
  category: string
  description: string
}

@Injectable({
  providedIn: 'root'
})

export class DanceDataService
{
  private dancesSubject=new BehaviorSubject<DanceStyle[]>([])
  public dances$=this.dancesSubject.asObservable()

  constructor(private http: HttpClient) {}

  loadDances (): Observable<DanceStyle[]>
  {
    const staticDances: DanceStyle[]=[
      {
        id: 1,
        name: 'Samba',
        category: 'Latin',
        description: 'A lively Brazilian dance with African roots, characterized by rapid steps and rhythmic hip movements'
      },
      {
        id: 2,
        name: 'Rumba',
        category: 'Latin',
        description: 'A slow, romantic Cuban dance often called the "dance of love"'
      },
      {
        id: 3,
        name: 'Cha Cha Cha',
        category: 'Latin',
        description: 'A playful, flirtatious dance with Cuban origins, characterized by its syncopated steps'
      },
      {
        id: 4,
        name: 'English Waltz',
        category: 'Ballroom',
        description: 'A smooth, elegant ballroom dance in 3/4 time with long, flowing movements'
      },
      {
        id: 5,
        name: 'Viennese Waltz',
        category: 'Ballroom',
        description: 'A faster version of the waltz with continuous turns and rotational movements'
      },
      {
        id: 6,
        name: 'Foxtrot',
        category: 'Ballroom',
        description: 'A smooth, progressive dance characterized by long, continuous flowing movements'
      },
      {
        id: 7,
        name: 'Salsa',
        category: 'Caribbean',
        description: 'A lively partner dance with Cuban and Puerto Rican roots, featuring intricate turn patterns'
      },
      {
        id: 8,
        name: 'Bachata',
        category: 'Caribbean',
        description: 'A romantic dance from the Dominican Republic with simple steps and sensual hip motion'
      },
      {
        id: 9,
        name: 'Kizomba',
        category: 'African',
        description: 'A sensual, smooth partner dance from Angola with close connection and subtle movements'
      },
      {
        id: 10,
        name: 'Blues',
        category: 'Social',
        description: 'A slow, expressive dance focused on musicality and connection between partners'
      },
      {
        id: 11,
        name: 'Disco',
        category: 'Social',
        description: 'A high-energy dance style popularized in the 1970s with flashy moves and rhythmic steps'
      },
      {
        id: 12,
        name: 'Jive',
        category: 'Latin',
        description: 'An energetic dance based on swing with fast kicks and flicks'
      },
      {
        id: 13,
        name: 'R\'n\'R',
        category: 'Rock',
        description: 'Rock and Roll dance with acrobatic elements and lively movements'
      },
      {
        id: 14,
        name: 'Merengue',
        category: 'Caribbean',
        description: 'A simple, fun dance from the Dominican Republic with a marching rhythm'
      },
      {
        id: 15,
        name: 'Sirtaki',
        category: 'Greek',
        description: 'A popular Greek dance that starts slow and gradually increases in pace'
      }
    ]

    return of(staticDances).pipe(
      tap(dances => this.dancesSubject.next(dances)),
      catchError(error =>
      {
        console.error('Error loading dances:', error)
        return of([])
      })
    )
  }

  getDanceById (id: number): Observable<DanceStyle|undefined>
  {
    return this.dances$.pipe(
      map(dances => dances.find(dance => dance.id===id)
      )
    )
  }

  filterDancesByCategory (category: string): Observable<DanceStyle[]>
  {
    return this.dances$.pipe(
      map(dances => dances.filter(dance => dance.category.toLowerCase()===category.toLowerCase())
      )
    )
  }
}
