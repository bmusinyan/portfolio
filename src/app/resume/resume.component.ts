import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-resume',
	templateUrl: './resume.component.html',
	styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	public manageActions(type) {
		switch (type) {
			case 'linkedin':
				window.open("https://www.linkedin.com/in/brian-musinyan-a22b7959", "_linkedin");
				break;
			case 'github':
				window.open("https://github.com/bmusinyan", "_github");
				break;
			case 'pdf':

				break;
			default:
				break;
		}
	}
}
