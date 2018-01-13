import { Component } from '@angular/core';

// TODO: prerender images, seems to be some latency on first load, possibly because of object-fit resizing

declare interface IWorkItem {
	id: string;
	title: string;
	jobTitle?: string;
	timeline?: string;
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
  styleUrls: ['./app.otherwork.css'],
})

export class OtherWorkComponent {
	public workItems: IWorkItem[] = [
		{
			id: "workTS",
			title: "TribalScale",
			jobTitle: "Agile Software Engineer",
			timeline: "September 2017 - December 2017 (2B)",
			description: `I was able to work on many different projects at TribalScale.

One of them was a web app which was like SquareSpace but for Alexa skills. \
I was able to participate in architecture decisions like the database schema. \
We designed the app to be highly extensible since we expected to support more types of Alexa skills in the future.

Another project was an Android app for a cruise ship line. \
I worked on the notifications system and dining reservations. \
Since it was a legacy app, we were slowly converting it to use better practices.

The third project was an Alexa skill. I helped polish it up. \
I also made a mock API to help QA, since the live API made it difficult to test all the different flows.

The last project was a web page. \
There was nothing special about it, but we added many accessiblity features.`,
			technologies: "Android, Alexa, React, Redux, jQuery, node.js",
			imageUrl: "assets/images/tribalscale.png"
		},
		{
			id: "work1",
			title: "Imagine Communications",
			jobTitle: "Full Stack Web Developer",
			timeline: "January 2017 - April 2017 (2A)",
			description: `I worked on the front-end of a content management web app using AngularJS and LESS. \
Mostly, I added small features, fixed bugs, and polished the UI. Also, I updated many of the UI's unit tests.

The app I was working on was part of an application suite. \
I created a messaging service that could be used in each app in the suite. \
This service would use web sockets to allow the apps to subscribe to messages. \
Each app could also publish messages in order to communicate with each other. \
The messaging service also came with a front-end component to show notifications to the user.`,
			technologies: "AngularJS, Typescript, LESS",
			imageUrl: "assets/images/imagine-communications.png"
		},
		{
			id: "work2",
			title: "Metal Trading Co.",
			jobTitle: "Front-end Web Developer",
			timeline: "May 2016 - July 2016 (1B)",
			description: `I took this part-time job during my first co-op for a challenge. \
I designed and created a prototype for a real-time trading app in Angular2. \
Angular2 was still in rc at the time so I had to learn and adapt quickly with limited resources. \
In addition, I wrote the server that facilitated the real-time trading feature using node.js and socket.io.`,
			technologies: "Angular2, node.js, Typescript, socket.io",
		},
		{
			id: "work3",
			title: "AAFC",
			jobTitle: "Computer Programmer",
			timeline: "May 2016 - September 2016 (1B)",
			description: `I worked on an graphing application in VB.NET. \
I added more analytic capabilities to it. \
If I finished early, I took the initiative to resolve performance issues and refactor the codebase. \
In addition, I created an application that would automate the testing process. \
I also updated a scientific model written in Fortran.`,
			technologies: "VB.NET, Fortran",
			imageUrl: "assets/images/aafc.jpeg"
		},
	]
	public projectItems: IWorkItem[][] = [
		[
			{
				id: "workcoupletbot",
				title: "Reddit Couplet Bot",
				description: `A bot that parses Reddit comments with regex for couplets. \
This bot interprets a couplet as two valid English lines that have the same number of syllables and also rhyme. \
The algorithms to count syllables and determine rhymes are very difficult to implement, so I used heuristics and APIs.`,
				sourceUrl: 'https://github.com/YifanM/reddit-couplet-bot',
				technologies: "Python",
				imageUrl: 'assets/images/couplet-bot.png'
			},
			{
				id: "worknotehead",
				title: "Note Heads",
				description: `A note-taking app that uses "chat heads" so notes are easily accessible. \
Drawing views on the foreground required native code. \
Although this project is in React Native, there is currently no iOS component.`,
				sourceUrl: 'https://github.com/YifanM/note-heads',
				technologies: "React Native, Redux",
			},
			{
				id: "workinvenbot",
				title: "Inventory Slackbot",
				description: `This is an independent project I started at TribalScale. \
It interacts with the company's inventory server to allow people to view and request devices through Slack. \
The node server uses a module to support email interactions as well.`,
				technologies: "node.js",
				imageUrl: 'assets/images/slackbot.png'
			},
			{
				id: "work4",
				title: "This website",
				description: `My personal website that I built in Angular2. I use it to showcase my past work. \
Although I use a library for the collapsible work items, the rest is basically made from scratch.`,
				technologies: "Angular2",
				imageUrl: "assets/images/website1.png",
				sourceUrl: "https://github.com/YifanM/professional-website-yifan"
			},
		],
		[
			{
				id: "work5",
				title: "Gomoku",
				description: `A 5-in-a-row board game to introduce myself to React. Supports illegal move detection.`,
				technologies: "React",
				imageUrl: "assets/images/gomoku.png",
				sourceUrl: "https://github.com/YifanM/gomoku-react",
				demoUrl: "assets/gomoku/index.html",
			},
			{
				id: "work6",
				title: "YifanM.github.io",
				description: `This was my first project in web development. I used it as a sandbox to try different web technologies.`,
				technologies: "JQuery",
				imageUrl: "assets/images/website2.png",
				sourceUrl: "https://github.com/YifanM/YifanM.github.io",
				demoUrl: "http://YifanM.github.io"
			},
			{
				id: "work8",
				title: "Adoorable",
				description: `A simple single-player game that has a twist at the end. This is a copy of the game with the same name.`,
				technologies: "HTML5 Canvas, JQuery",
				imageUrl: "assets/images/adoorable.png",
				sourceUrl: "https://github.com/YifanM/adoorable",
				demoUrl: "assets/adoorable/adoorable.html"
			},
			{
				id: "work7",
				title: "Battle Pong",
				description: `My first Android app. It's pong but you can also shoot your opponent.`,
				technologies: "Java, XML, Android",
				imageUrl: "assets/images/battle-pong.png",
				sourceUrl: "https://github.com/YifanM/battle-pong"
			},
		],
		[
			{
				id: "work9",
				title: "InDesign",
				description: `Various InDesign posters.`,
				technologies: "InDesign",
				imageUrl: "assets/indesign-pdfs/2.jpg"
			},
			{
				id: "work10",
				title: "Doodlejump",
				description: `Doodlejump is a mobile game involving a character controlled through tilting. \
Some classmates and me recreated it on a LaunchPad using its OLED and the accelerometer.`,
				technologies: "Tiva-C LaunchPad, Energia",
				imageUrl: "assets/images/doodlejump.jpg",
				sourceUrl: "https://github.com/YifanM/orbit-demos"
			},
			{
				id: "work11",
				title: "Rainmeter",
				description: `Rainmeter is a platform for desktop customization. \
My Rainmeter skin shows some simple meters, such as time and weather.`,
				technologies: "Rainmeter, Lua",
				imageUrl: "assets/images/rainmeter.png"
			},
			{
				id: "work13",
				title: "BonaMat",
				description: `A project I did in Shad Valley.
				The idea was a mat that read the user's body temperature and communicated it to a smart thermostat. \
The purpose was to adjust room temperature accordingly while the user slept.`,
				technologies: "Arduino",
				imageUrl: "assets/images/bonamat.jpg"
			},
		],
	];

	toggleExpanded(item: IWorkItem) {
		item["isOpen"] = !item["isOpen"];
	}
}
