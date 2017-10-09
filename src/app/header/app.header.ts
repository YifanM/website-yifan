import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/filter';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './app.header.html',
  styleUrls: ['./app.header.css']
})

export class HeaderComponent implements OnInit {

	constructor (private router: Router) { }

	private pageOrders: {} = { '/home': 0, '/work': 1, '/documents': 2, '/uw': 3 };

	ngOnInit() {
		this.router.events.pairwise().filter((e) => e[0] instanceof NavigationEnd && e[1] instanceof NavigationStart).subscribe((e: [NavigationStart, NavigationEnd]) => {
			const isLeft = this.pageOrders[e[0].url] > this.pageOrders[e[1].url];
			$("#mainWrapper").addClass("invisible");
			$("#mainWrapper").removeClass("animated slideInLeft");
			$("#mainWrapper").removeClass("animated slideInRight");
			setTimeout(() => {
			if (isLeft) {
				$("#mainWrapper").removeClass("invisible");
				$("#mainWrapper").addClass("animated slideInLeft").one("animationend", () => {
					$("#mainWrapper").removeClass("animated slideInLeft");
				});
			} else {
				$("#mainWrapper").removeClass("invisible");
				$("#mainWrapper").addClass("animated slideInRight").one("animationend", () => {
					$("#mainWrapper").removeClass("animated slideInRight");
				});
			}
			})

		});
	}
}
