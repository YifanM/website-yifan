import { Component } from '@angular/core';
import { routerTransition } from './app.router.animations';

declare interface workItem {
	id: string;
	title: string;
	timeline: string;
	description: string;
	technologies: string;
	imageUrl?: string;
	sourceUrl?: string;
}

@Component({
  selector: 'app-other-work',
  templateUrl: './app.otherwork.html',
  styleUrls: ['./app.otherwork.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})

export class OtherWorkComponent {
	public workItems: workItem[] = [
		{
			id: "work1",
			title: "Imagine Communications",
			timeline: "January 2017 - April 2017 (2A)",
			description: "I worked as a full-stack web developer.",
			technologies: "AngularJS, Typescript, LESS, Mercurial"
		},
		{
			id: "work2",
			title: "Metal Trading Co.",
			timeline: "May 2016 - September 2016 (1B)",
			description: "I worked part-time remotely as a front-end web developer.",
			technologies: "Angular 2, node.js, Typescript, socket.io"
		},
		{
			id: "work3",
			title: "AAFC",
			timeline: "May 2016 - September 2016 (1B)",
			description: "I worked as an application programmer.",
			technologies: "VB, VBA, Fortran"
		},
	]
	public projectItems1: workItem[] = [
		{
			id: "work4",
			title: "This website",
			timeline: "April 2017 - Now (In progress)",
			description: "My website.",
			technologies: "Angular 2"
		},
		{
			id: "work5",
			title: "Gomoku",
			timeline: "February 2017 - March 2017",
			description: "A two-player board game.",
			technologies: "ReactJS"
		},
		{
			id: "work6",
			title: "YifanM.github.io",
			timeline: "May 2016 - September 2016",
			description: "My first website.",
			technologies: "JQuery, JavaScript, HTML, CSS"
		},
		{
			id: "work7",
			title: "Battle Pong",
			timeline: "March 2017 - Now (In progress)",
			description: "My first android application.",
			technologies: "Java, XML, Android"
		},
	]
	public projectItems2: workItem[] = [
		{
			id: "work8",
			title: "Adoorable",
			timeline: "April 2017",
			description: "A simple single-player game.",
			technologies: "HTML5 Canvas, JQuery, JavaScript"
		},
		{
			id: "work9",
			title: "InDesign",
			timeline: "Various",
			description: "Various InDesign posters I made for various occasions.",
			technologies: "InDesign"
		},
		{
			id: "work10",
			title: "Doodlejump",
			timeline: "October 2016",
			description: "asd",
			technologies: "asd"
		},
		{
			id: "work11",
			title: "Rainmeter",
			timeline: "asd",
			description: "asd",
			technologies: "asd"
		},
	]
	public projectItems3: workItem[] = [
		{
			id: "work12",
			title: "Game of Life",
			timeline: "asd",
			description: "asd",
			technologies: "asd"
		},
	]
}
