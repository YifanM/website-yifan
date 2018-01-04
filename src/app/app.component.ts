import { Component } from '@angular/core';
import routerAnimation from './router.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerAnimation]
})

export class AppComponent {
	animateRouteChange(outlet) {
    try {
    	return outlet.activatedRoute.snapshot.routeConfig.path;
		} catch(e) {
		  return '';
		}
	}
}
