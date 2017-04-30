import { Component } from '@angular/core';
import { routerTransition } from './app.router.animations';

@Component({
  selector: 'app-home',
  templateUrl: './app.home.html',
  styleUrls: ['./app.home.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})

export class HomeComponent {

}
