import { Component } from '@angular/core';
import { Ng2DeviceService } from 'ng2-device-detector';

@Component({
  selector: 'app-home',
  templateUrl: './app.home.html',
  styleUrls: ['./app.home.css']
})

export class HomeComponent {
	public displayWarning = false;
	public browser: string;
	public version: string;

	constructor (private deviceService: Ng2DeviceService) {
		this.browser = this.deviceService.getDeviceInfo().browser;
		this.version = this.deviceService.getDeviceInfo().browser_version;
	}

	toggleWarning() {
		this.displayWarning = !this.displayWarning;
	}
}
