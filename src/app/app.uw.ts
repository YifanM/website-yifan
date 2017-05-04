import { Component } from '@angular/core';

declare interface ICourseItem {
	code: string,
	name: string,
	term: string,
	description: string,
	url?: string
}

@Component({
  selector: 'app-uw',
  templateUrl: './app.uw.html',
  styleUrls: ['./app.uw.css']
})

export class UWComponent {
	public courseItems: ICourseItem[] = [
		{
			code: "CS 241",
			name: "Foundations of Sequential Programs",
			term: "2A",
			description: "Scanning, parsing, type-checking, formal languages, automatons etc. Built assembler and compiler for a subset of C++. MIPS architecture.",
			url: "http://www.ucalendar.uwaterloo.ca/1718/COURSE/course-CS.html#CS241"
		},
		{
			code: "ECE 222",
			name: "Digital Computers",
			term: "2A",
			description: "Explanations on how computer hardware works. ARM architecture.",
			url: "http://www.ucalendar.uwaterloo.ca/1718/COURSE/course-ECE.html#ECE222"
		},
		{
			code: "SE 212",
			name: "Logic and Computation",
			term: "2A",
			description: "Formal logic applied to program correctness.",
			url: "http://www.ucalendar.uwaterloo.ca/1718/COURSE/course-SE.html#SE212"
		},
		{
			code: "CS 138",
			name: "Introduction to Data Abstraction and Implementation",
			term: "1B",
			description: "Important data structures and various implementations of them in C++.",
			url: "http://www.ucalendar.uwaterloo.ca/1718/COURSE/course-CS.html#CS138"
		},
		{
			code: "ECE 124",
			name: "Digital Circuits and Systems",
			term: "1B",
			description: "Boolean algebra, synchronous and asynchronous computer circuits.",
			url: "http://www.ucalendar.uwaterloo.ca/1718/COURSE/course-ECE.html#ECE124"
		},
		{
			code: "CS 137",
			name: "Programming Principles",
			term: "1A",
			description: "Key concepts of C such as dynamic memory and strings.",
			url: "http://www.ucalendar.uwaterloo.ca/1718/COURSE/course-CS.html#CS137"
		},
		{
			code: "SE 101",
			name: "Introduction to Methods of Software Engineering",
			term: "1A",
			description: "Light seminars to introduce ideas such as machine learning and encryption.",
			url: "http://www.ucalendar.uwaterloo.ca/1718/COURSE/course-SE.html#SE101"
		}
	]
}
