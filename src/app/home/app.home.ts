import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, state, animate, style, transition, query, group, stagger } from '@angular/animations';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/filter';
import { Ng2DeviceService } from 'ng2-device-detector';

@Component({
  selector: 'app-home',
  templateUrl: './app.home.html',
  styleUrls: ['./app.home.css'],
  animations: [
  	trigger('pageLoaded', [
    	transition('void => *', [
    		query('.welcome-message', style({ opacity: 0, transform: 'translateY(-20%)' })),
    		query('.university-intro', style({ opacity: 0, transform: 'translateY(-10%)' })),
    		query('.circle-picture>img', style({ opacity: 0 })),
    		query('.circle-1', style({ opacity: 0 })),
    		query('.circle-2', style({ opacity: 0 })),
    		query('.circle-3', style({ opacity: 0 })),
    		query('.welcome-message', animate('2s', style({ opacity: 1, transform: 'translateY(0%)' }))),
    		query('.university-intro', animate('0.75s 1s', style({ opacity: 1, transform: 'translateY(0%)' }))),
    		query('.circle-3', animate('0.2s 1s', style({ opacity: 1 }))),
    		query('.circle-2', animate('0.2s 0.3s', style({ opacity: 1 }))),
    		query('.circle-1', animate('0.2s 0.3s', style({ opacity: 1 }))),
    		query('.circle-picture>img', animate('0.2s 0.3s', style({ opacity: 1 }))),
    	])
  	])
  ]
})

export class HomeComponent {
	public displayWarning = false;
	public browser: string;
	public version: string;

	public initialLoad: boolean;

	constructor (private deviceService: Ng2DeviceService, private router: Router) {
		this.browser = this.deviceService.getDeviceInfo().browser;
		this.version = this.deviceService.getDeviceInfo().browser_version;

		// listen to if page is initially loaded onto home page
		this.router.events.filter((e) => e instanceof NavigationEnd && e.id === 1).subscribe((e: NavigationEnd) => {
			this.initialLoad = true;
		})
	}

	toggleWarning() {
		this.displayWarning = !this.displayWarning;
	}
}
