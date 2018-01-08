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
			description: `I was able to work on various projects such as NBA's Alexa skill, Carnival's Android app, and CIBC's website.
			I was also able to work on TribalScale's own web app, which was like SquareSpace but for Alexa skills.
			Since I was changing projects so frequently, I had to learn quickly and communicate effectively with new people.`,
			technologies: "Android, Alexa, React, Redux, jQuery, node.js",
			imageUrl: "assets/images/tribalscale.png"
		},
		{
			id: "work1",
			title: "Imagine Communications",
			jobTitle: "Full Stack Web Developer",
			timeline: "January 2017 - April 2017 (2A)",
			description: `I worked on a content management web app using AngularJS and LESS.
				I worked well with my team in order to complete almost 100 stories over the four months.
				Also, I updated many of the UI's unit tests.`,
			technologies: "AngularJS, Typescript, LESS",
			imageUrl: "assets/images/imagine-communications.png"
		},
		{
			id: "work2",
			title: "Metal Trading Co.",
			jobTitle: "Front-end Web Developer",
			timeline: "May 2016 - July 2016 (1B)",
			description: `I took this part-time job during my first co-op because I felt the co-op wasn't challenging enough.
				I created a prototype for a real-time trading platform in Angular2.
				Angular2 was still in rc at the time so I had to learn and adapt quickly with limited resources.
				In addition, I wrote the web socket part of the server using node.js and socket.io.`,
			technologies: "Angular2, node.js, Typescript, socket.io",
		},
		{
			id: "work3",
			title: "AAFC",
			jobTitle: "Computer Programmer",
			timeline: "May 2016 - September 2016 (1B)",
			description: `I worked on an graphing application in VB.NET.
				I also updated a scientific model written in Fortran.
				When I had time, I took the intiative to add features and improve the existing code.`,
			technologies: "VB.NET, Fortran",
			imageUrl: "assets/images/aafc.jpeg"
		},
	]
	public projectItems: IWorkItem[][] = [
		[
			{
				id: "workcoupletbot",
				title: "Reddit Couplet Bot",
				description: `A bot that parses Reddit comments for couplets.
				This bot interprets a couplet as two valid English lines that have the same number of syllables and also rhyme.
				Algorithms involving language are typically very difficult to implement, so I used heuristics and external databases.`,
				sourceUrl: 'https://github.com/YifanM/reddit-couplet-bot',
				technologies: "Python",
				imageUrl: 'assets/images/couplet-bot.png'
			},
			{
				id: "worknotehead",
				title: "Note Heads",
				description: `A note-taking app that uses the same idea as Facebook Messenger's chat heads.
				I use my phone to keep reminders so I created this app because I wanted to view my reminders from any screen.
				Although this project is in React Native, there is currently no iOS component.`,
				sourceUrl: 'https://github.com/YifanM/note-heads',
				technologies: "React Native, Redux",
			},
			{
				id: "workinvenbot",
				title: "Inventory Slackbot",
				description: `This is an independent project I started at TribalScale.
				It interacts with the company's inventory system to allow people to view and request devices through Slack.`,
				technologies: "node.js",
				imageUrl: 'assets/images/slackbot.png'
			},
			{
				id: "work4",
				title: "This website",
				description: `My current website in Angular2.
				Currently, I use it to showcase my past work.`,
				technologies: "Angular2",
				imageUrl: "assets/images/website1.png",
				sourceUrl: "https://github.com/YifanM/professional-website-yifan"
			},
		],
		[
			{
				id: "work5",
				title: "Gomoku",
				description: `A 5-in-a-row board game to introduce myself to React.`,
				technologies: "React",
				imageUrl: "assets/images/gomoku.png",
				sourceUrl: "https://github.com/YifanM/gomoku-react",
				demoUrl: "assets/gomoku/index.html",
			},
			{
				id: "work6",
				title: "YifanM.github.io",
				description: `This was my first project in web development.
					I used it as a sandbox to try different web technologies.`,
				technologies: "JQuery",
				imageUrl: "assets/images/website2.png",
				sourceUrl: "https://github.com/YifanM/YifanM.github.io",
				demoUrl: "http://YifanM.github.io"
			},
			{
				id: "work8",
				title: "Adoorable",
				description: `A simple single-player game that has a twist at the end.
					This is a copy of the game with the same name.`,
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
				description: `Doodlejump is a mobile game involving a character controlled through tilting.
					Some classmates and me recreated it on a LaunchPad using its OLED and the accelerometer.`,
				technologies: "Tiva-C LaunchPad, Energia",
				imageUrl: "assets/images/doodlejump.jpg",
				sourceUrl: "https://github.com/YifanM/orbit-demos"
			},
			{
				id: "work11",
				title: "Rainmeter",
				description: `Rainmeter is a platform for desktop customization.
					My Rainmeter skin shows some simple meters, such as time and weather.`,
				technologies: "Rainmeter, Lua",
				imageUrl: "assets/images/rainmeter.png"
			},
			{
				id: "work13",
				title: "BonaMat",
				description: `A project I did in Shad Valley.
				The idea was a mat that read the user's body temperature and communicated it to a smart thermostat.
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
