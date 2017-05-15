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
				Primarily, I worked on the web UI for a content management application using AngularJS and LESS.
				This sometimes took me into difficult territory such as scope manipulation but I still managed to do it.
				Also, I updated some of the UI's unit tests.
				My team was Agile, so I learnt to coordinate smoothly with the other developers and QA.
				Over the four months, I completed almost 100 stories/bugs which, my manager told me, was quite impressive.`,
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
				We used socket.io for web sockets (as it was a real-time trading platform) and I wrote the node.js server to handle the socket channels.
				By the end of the two months, I created a working prototype mostly independently.`,
			technologies: "Angular 2, node.js, Typescript, socket.io",
			imageUrl: "assets/images/metal.jpg"
		},
		{
			id: "work3",
			title: "AAFC",
			timeline: "May 2016 - September 2016 (1B)",
			description: `I worked as an application programmer in VB.NET.
				The application would read, analyze, and graph agricultural data files.
				I also updated the CANB Nitrogen Model, which was like a big calculation program written in Fortran.
				I saw that lots of the existing code could be improved, so I rewrote certain parts with the permission of my manager.
				In addition, I took the initiative to add useful features when I thought of them, such as adding more automation to the testing program.`,
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
				In the future, I plan to add features like a comments section.`,
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
				One is responsible for the background grid, one is responsible to animate and display the pieces, and one is responsible to receive clicks in order to update the game state.`,
			technologies: "ReactJS",
			imageUrl: "assets/images/gomoku.png",
			sourceUrl: "https://github.com/YifanM/gomoku-react",
			demoUrl: "assets/gomoku/index.html",
		},
		{
			id: "work6",
			title: "YifanM.github.io",
			timeline: "May 2016 - September 2016",
			description: `This was my first try at web development, which is why the quality is not that high.
				Most of the content has been moved to this website.
				However, it seems the services I used (like a dictionary API) still work.`,
			technologies: "JQuery, JavaScript, HTML, CSS",
			imageUrl: "assets/images/website2.png",
			sourceUrl: "https://github.com/YifanM/YifanM.github.io",
			demoUrl: "http://YifanM.github.io"
		},
		{
			id: "work7",
			title: "Battle Pong",
			timeline: "March 2017 - Now (In progress)",
			description: `My first android application.
				It's based on pong, but with a lot of extra features.
				For example, you can collect a weapon that will paralyze your opponent or spawn more balls.
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
				The levels are designed to spell a message using the player's path.
				It's pretty much an exact copy of the original, which you can find by searching the same name.`,
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
			timeline: "October 2015",
			description: `My class was given some Arduino-like hardware devices.
				Some of my classmates and me decided to recreate Doodlejump.
				We tried a few other small programs, like a calculator that connects to a computer.
				The program was written in Energia and used hardware features such as the OLED and the accelerometer.`,
			technologies: "Tiva-C LaunchPad, Energia",
			imageUrl: "assets/images/doodlejump.jpg",
			sourceUrl: "https://github.com/YifanM/orbit-demos"
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
				The code for the demo, which I wrote, was simple: read the sensors, do some calculations, display the data.`,
			technologies: "Arduino",
			imageUrl: "assets/images/bonamat.jpg"
		},
	]

	toggleExpanded(item: IWorkItem) {
		item["isOpen"] = !item["isOpen"];
	}
}
