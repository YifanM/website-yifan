import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/filter';
declare var $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

	constructor (private router: Router) { }

	private pageOrders: {} = { '/home': 0, '/work': 1, '/documents': 2 };
	private pageElements: {} = { '/home': '#home', '/work': '#work', '/documents': '#documents' };

	ngOnInit() {
		// temporary, not working yet
		// maybe investigate other ways of doing this
		this.router.events.pairwise().filter((e) => e[0] instanceof NavigationEnd && e[1] instanceof NavigationStart).subscribe((e: [NavigationStart, NavigationEnd]) => {
			const animateLeft = this.pageOrders[e[0].url] > this.pageOrders[e[1].url];
			if (animateLeft) {
				$(this.pageElements[e[0].url]).addClass("animated slideOutRight").one("animationend", function() {
					$(this).removeClass("animated slideOutRight");
				})
				$(this.pageElements[e[1].url]).addClass("animated slideInLeft").one("animationend", function() {
					$(this).removeClass("animated slideInLeft");
				})
			} else {
				$(this.pageElements[e[0].url]).addClass("animated slideOutLeft").one("animationend", function() {
					$(this).removeClass("animated slideOutLeft");
				})
				$(this.pageElements[e[1].url]).addClass("animated slideInRight").one("animationend", function() {
					$(this).removeClass("animated slideInRight");
				})
			}
		});
	}
}
