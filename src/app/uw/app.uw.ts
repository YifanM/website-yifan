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
			code: "CS 240",
			name: "Data Structures and Data Management",
			term: "2B",
			description: "Various data structures and their operations",
		},
		{
			code: "CS 247",
			name: "Software Engineering Principles",
			term: "2B",
			description: "Software design, concepts, and patterns",
		},
		{
			code: "CS 241",
			name: "Foundations of Sequential Programs",
			term: "2A",
			description: "Scanning, parsing, type-checking, formal languages, automatons etc. Built assembler and compiler for a subset of C++. MIPS architecture.",
		},
		{
			code: "ECE 222",
			name: "Digital Computers",
			term: "2A",
			description: "Explanations on how computer hardware works. ARM architecture.",
		},
		{
			code: "SE 212",
			name: "Logic and Computation",
			term: "2A",
			description: "Formal logic applied to program correctness.",
		},
		{
			code: "CS 138",
			name: "Introduction to Data Abstraction and Implementation",
			term: "1B",
			description: "Important data structures and various implementations of them in C++.",
		},
		{
			code: "ECE 124",
			name: "Digital Circuits and Systems",
			term: "1B",
			description: "Boolean algebra, synchronous and asynchronous computer circuits.",
		},
		{
			code: "CS 137",
			name: "Programming Principles",
			term: "1A",
			description: "Key concepts of C such as dynamic memory and strings.",
		},
		{
			code: "SE 101",
			name: "Introduction to Methods of Software Engineering",
			term: "1A",
			description: "Light seminars to introduce ideas such as machine learning and encryption.",
		}
	]
}
