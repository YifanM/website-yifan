import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app.sidebar.html',
  styleUrls: ['./app.sidebar.css']
})

export class SidebarComponent {
	public isSidebarOpen: boolean = false;

	toggleSidebar() {
		alert(1);
		this.isSidebarOpen = !this.isSidebarOpen;
	}
}
