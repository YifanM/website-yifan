import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './app.sidebar.html',
  styleUrls: ['./app.sidebar.css']
})

export class SidebarComponent {
	public isSidebarOpen: boolean = false;

	toggleSidebar() {
		if (this.isSidebarOpen) {
			$("#sidebar").addClass("animated sidebarSlideOutLeft").one("animationend", () => {
				$("#sidebar").removeClass("animated sidebarSlideOutLeft");
				this.isSidebarOpen = !this.isSidebarOpen;
			});
		} else {
			this.isSidebarOpen = !this.isSidebarOpen;
			$("#sidebar").addClass("animated sidebarSlideInLeft").one("animationend", function() {
				$(this).removeClass("animated sidebarSlideInLeft");
			});
		}
	}
}
