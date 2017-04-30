import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/observable';
import { RouterService } from './app.router.service';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-header',
  templateUrl: './app.header.html',
  styleUrls: ['./app.header.css']
})

export class HeaderComponent implements OnInit {

	constructor (private router: Router, private routerService: RouterService) { }

	private pageOrders: {} = { '/home': 0, '/work': 1, '/documents': 2 };

	ngOnInit() {
		this.router.events.pairwise().filter((e) => e[0] instanceof NavigationEnd && e[1] instanceof NavigationStart).subscribe((e: [NavigationStart, NavigationEnd]) => {
			this.routerService.isDirectionLeft = this.pageOrders[e[0].url] > this.pageOrders[e[1].url];
		});
	}
}
