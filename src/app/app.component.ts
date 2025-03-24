import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // <-- Importa RouterModule aquí
  template: `
    <button [routerLink]="'/home'">Ir a Home</button>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
