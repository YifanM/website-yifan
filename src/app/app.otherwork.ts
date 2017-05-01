import { Component } from '@angular/core';

declare interface IWorkItem {
	id: string;
	title: string;
	timeline: string;
	description: string;
	technologies: string;
	isOpen?: boolean;
	imageUrl?: string;
	sourceUrl?: string;
	demoUrl?: string;
}

@Component({
  selector: 'app-other-work',
  templateUrl: './app.otherwork.html',
  styleUrls: ['./app.otherwork.css']
})

export class OtherWorkComponent {
	public workItems: IWorkItem[] = [
		{
			id: "work1",
			title: "Imagine Communications",
			timeline: "January 2017 - April 2017 (2A)",
			description: "I worked as a full-stack web developer.",
			technologies: "AngularJS, Typescript, LESS, Mercurial",
			imageUrl: "assets/images/imagine-communications.png"
		},
		{
			id: "work2",
			title: "Metal Trading Co.",
			timeline: "May 2016 - September 2016 (1B)",
			description: "I worked remotely for this start-up as a front-end web developer. As I had a day co-op, I did this part-time in the evenings.",
			technologies: "Angular 2, node.js, Typescript, socket.io"
		},
		{
			id: "work3",
			title: "AAFC",
			timeline: "May 2016 - September 2016 (1B)",
			description: "I worked as an application programmer.",
			technologies: "VB, VBA, Fortran",
			imageUrl: "assets/images/aafc.jpeg"
		},
	]
	public projectItems1: IWorkItem[] = [
		{
			id: "work4",
			title: "This website",
			timeline: "April 2017 - Now (In progress)",
			description: "My website.",
			technologies: "Angular 2",
			imageUrl: "assets/images/website1.png",
			sourceUrl: "https://github.com/YifanM/professional-website-yifan",
			demoUrl: "http://pix.iemoji.com/images/emoji/apple/ios-9/256/thinking-face.png"
		},
		{
			id: "work5",
			title: "Gomoku",
			timeline: "February 2017 - March 2017",
			description: "A two-player board game.",
			technologies: "ReactJS",
			imageUrl: "assets/images/gomoku.png",
			sourceUrl: "https://github.com/YifanM/gomoku-react",
			demoUrl: "assets/gomoku/index.html",
		},
		{
			id: "work6",
			title: "YifanM.github.io",
			timeline: "May 2016 - September 2016",
			description: "My first website.",
			technologies: "JQuery, JavaScript, HTML, CSS",
			imageUrl: "assets/images/website2.png",
			sourceUrl: "https://github.com/YifanM/YifanM.github.io",
			demoUrl: "https://YifanM.github.io"
		},
		{
			id: "work7",
			title: "Battle Pong",
			timeline: "March 2017 - Now (In progress)",
			description: "My first android application. It's pong with a bunch of special features.",
			technologies: "Java, XML, Android",
			sourceUrl: "https://github.com/YifanM/battle-pong"
		},
	]
	public projectItems2: IWorkItem[] = [
		{
			id: "work8",
			title: "Adoorable",
			timeline: "April 2017",
			description: "A simple single-player game.",
			technologies: "HTML5 Canvas, JQuery, JavaScript",
			imageUrl: "assets/images/adoorable.png",
			sourceUrl: "https://github.com/YifanM/adoorable",
			demoUrl: "assets/adoorable/adoorable.html"
		},
		{
			id: "work9",
			title: "InDesign",
			timeline: "Various",
			description: "Various InDesign posters I made for various occasions.",
			technologies: "InDesign",
			imageUrl: "assets/indesign-pdfs/2.jpg"
		},
		{
			id: "work10",
			title: "Doodlejump",
			timeline: "October 2016",
			description: "Recreated the game on a LaunchPad using its bitmap OLED.",
			technologies: "Tiva-C LaunchPad, Energia"
		},
		{
			id: "work11",
			title: "Rainmeter",
			timeline: "July 2016",
			description: "A background layer for my desktop.",
			technologies: "Rainmeter, Lua",
			imageUrl: "assets/images/rainmeter.png"
		},
	]
	public projectItems3: IWorkItem[] = [
		{
			id: "work12",
			title: "Game of Life",
			timeline: "March 2017 - Now (In progress)",
			description: "Conway's Game of Life.",
			technologies: "OpenGL, C",
			sourceUrl: "https://github.com/YifanM/game-of-life"
		},
		{
			id: "work13",
			title: "BonaMat",
			timeline: "July 2014",
			description: "A project I did while in Shad Valley.",
			technologies: "Arduino"
		},
	]

	toggleExpanded(item: IWorkItem) {
		item["isOpen"] = !item["isOpen"];
	}
}
