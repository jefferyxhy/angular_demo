import { heroes } from './mock-heroes';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { observable, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

constructor() { }

  getheroes(): Observable<Hero[]> {
    return of(heroes);
  }

}
