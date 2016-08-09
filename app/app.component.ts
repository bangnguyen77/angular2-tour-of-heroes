import { Component } from '@angular/core';
export class Hero {
  id: number;
  name: string;
}
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details!</h2>
      <div><label>id: </label>{{selectedHero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name" />
      </div>
    </div>
    <li *ngFor="let hero of heroes"
      [class.selected]="hero === selectedHero"
      (click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
    `,
  styles: [`
    .selected {
      background-color: #cfd8dc !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #eee;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
  `],
  [class.selected]="hero === selectedHero"
})
export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero: Heroes;
  onSelect(hero: Hero) { this.selectedHero = hero; }
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice'},
  { id: 12, name: 'Mr. Narco'},
  { id: 13, name: 'Mr. Bombasto'},
  { id: 14, name: 'Mr. Celeritas'},
  { id: 15, name: 'Mr. Magneta'},
  { id: 16, name: 'Mr. RubberMan'},
  { id: 17, name: 'Mr. Dynama'},
  { id: 18, name: 'Mr. Dr IQ'},
  { id: 19, name: 'Mr. Magma'},
  { id: 20, name: 'Mr. Tornado'},
];
