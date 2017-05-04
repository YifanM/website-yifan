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
			description: `I worked as a full-stack web developer.
				Primarily, I worked on the web UI, using AngularJS and LESS, for a commercial content management software.
				My team was Agile, so I learnt to coordinate smoothly with the other developers and QA.
				Some features I added were difficult such as custom directives, scope manipulation, and big chains of multiple promises.
				I also updated some of the UI's unit tests.`,
			technologies: "AngularJS, Typescript, LESS, Mercurial",
			imageUrl: "assets/images/imagine-communications.png"
		},
		{
			id: "work2",
			title: "Metal Trading Co.",
			timeline: "May 2016 - September 2016 (1B)",
			description: `I worked remotely for this start-up as a front-end web developer.
				I did this part-time during my first co-op because I felt the day job wasn't challenging enough.
				When I was working on this, we used Angular 2 which was quite new so I learnt to adapt quickly and figure things out with limited resources.
				We used socket.io for web sockets (as it was a real-time trading platform) and I wrote the node.js server to handle the socket channels`,
			technologies: "Angular 2, node.js, Typescript, socket.io",
			imageUrl: "assets/images/metal.jpg"
		},
		{
			id: "work3",
			title: "AAFC",
			timeline: "May 2016 - September 2016 (1B)",
			description: `I worked as an application programmer in VB.NET.
				The application would read, analyze, and graph (automating Excel) agricultural data files.
				I also updated the CANB Nitrogen Model, which was a calculation program written in Fortran.`,
			technologies: "VB.NET, Fortran",
			imageUrl: "assets/images/aafc.jpeg"
		},
	]
	public projectItems1: IWorkItem[] = [
		{
			id: "work4",
			title: "This website",
			timeline: "April 2017 - Now (In progress)",
			description: `My current website in Angular 2.
				Its purpose is kind of like a bigger resume. 
				I use external CSS libraries such as animate.css and Bootstrap, but a lot of my custom CSS is used as well.
				There is nothing terribly special about this website yet, but I plan to add features which require a back-end.`,
			technologies: "Angular 2",
			imageUrl: "assets/images/website1.png",
			sourceUrl: "https://github.com/YifanM/professional-website-yifan",
			demoUrl: "http://pix.iemoji.com/images/emoji/apple/ios-9/256/thinking-face.png"
		},
		{
			id: "work5",
			title: "Gomoku",
			timeline: "February 2017 - March 2017",
			description: `A two-player board game.
				If you're not familiar with Gomoku (not Go), it's like tic-tac-toe but with 5-in-a-row instead.
				The board I made has three layers.
				One is responsible for the background grid, one is responsible to animate and display the pieces, and one is responsible to receive clicks in order to update the game state.
				I imported a modal and toasts to show rules and errors when I calculate an illegal move happens.`,
			technologies: "ReactJS",
			imageUrl: "assets/images/gomoku.png",
			sourceUrl: "https://github.com/YifanM/gomoku-react",
			demoUrl: "assets/gomoku/index.html",
		},
		{
			id: "work6",
			title: "YifanM.github.io",
			timeline: "May 2016 - September 2016",
			description: `This was my first try at web development and I decided to start big.
				I tried to make as much code as possible entirely mine.
				So that's not a great combination, which is why the code is pretty low quality and the website doesn't look great.
				However, I learnt valuable things when creating my lightbox from scratch or when learning how to use AJAX requests and callbacks.`,
			technologies: "JQuery, JavaScript, HTML, CSS",
			imageUrl: "assets/images/website2.png",
			sourceUrl: "https://github.com/YifanM/YifanM.github.io",
			demoUrl: "https://YifanM.github.io"
		},
		{
			id: "work7",
			title: "Battle Pong",
			timeline: "March 2017 - Now (In progress)",
			description: `My first android application.
				It's based on pong, but with a lot of extra features.
				For example, you can collect a weapon that will paralyze your opponent or spawn tens of balls.
				I still want to add a two player online mode and an AI for single player mode.`,
			technologies: "Java, XML, Android",
			imageUrl: "assets/images/battle-pong.png",
			sourceUrl: "https://github.com/YifanM/battle-pong"
		},
	]
	public projectItems2: IWorkItem[] = [
		{
			id: "work8",
			title: "Adoorable",
			timeline: "April 2017",
			description: `A simple single-player game with a twist at the end.
				It's pretty much an exact copy of the original, which you can find by searching the same name.
				Although simple, I still learnt things such as browser animation frames, game loops, and collisions.`,
			technologies: "HTML5 Canvas, JQuery, JavaScript",
			imageUrl: "assets/images/adoorable.png",
			sourceUrl: "https://github.com/YifanM/adoorable",
			demoUrl: "assets/adoorable/adoorable.html"
		},
		{
			id: "work9",
			title: "InDesign",
			timeline: "Various",
			description: `The colourful poster was for a meeting where my high school decided which charity to support.
				The word poster was for the back page of a yearbook.`,
			technologies: "InDesign",
			imageUrl: "assets/indesign-pdfs/2.jpg"
		},
		{
			id: "work10",
			title: "Doodlejump",
			timeline: "October 2016",
			description: `My class was given some hardware devices.
				Some of my classmates and me decided to recreate Doodlejump.
				The program was written in Energia (similar to Arduino) and displayed on a bitmap OLED.`,
			technologies: "Tiva-C LaunchPad, Energia",
			imageUrl: "assets/images/doodlejump.jpg"
		},
		{
			id: "work11",
			title: "Rainmeter",
			timeline: "July 2016",
			description: `Rainmeter is a program for customizing your desktop.
				It maintains a "skin", which is a layer on the desktop.
				My skin does things like show the time, weather, and a calendar showing the current day.
				It can control music players too, which requires a small amount of Lua.`,
			technologies: "Rainmeter, Lua",
			imageUrl: "assets/images/rainmeter.png"
		},
	]
	public projectItems3: IWorkItem[] = [
		{
			id: "work12",
			title: "Game of Life",
			timeline: "March 2017 - Now (Inactive)",
			description: `Conway's Game of Life using OpenGL.
				OpenGL in VS was harder to setup and use than I anticipated, which is why I kind of lost interest.
				I'll come back to this some day.`,
			technologies: "OpenGL, C",
			sourceUrl: "https://github.com/YifanM/game-of-life",
			imageUrl: "assets/images/gol.png"
		},
		{
			id: "work13",
			title: "BonaMat",
			timeline: "July 2014",
			description: `A project I did while in Shad Valley.
				My group's idea was a blanket with sensors that would analyze your body metrics and control a smart thermostat accordingly.
				The blanket contained an Arduino.
				The code for the demo was to read the sensors and do some calculations.`,
			technologies: "Arduino",
			imageUrl: "assets/images/bonamat.jpg"
		},
	]

	toggleExpanded(item: IWorkItem) {
		item["isOpen"] = !item["isOpen"];
	}
}
