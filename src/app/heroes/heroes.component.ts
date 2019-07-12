import { HeroService } from '../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroeservice: HeroService) {
  }

  ngOnInit() {
    this.getheroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  getheroes(): void {
    this.heroeservice.getheroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
