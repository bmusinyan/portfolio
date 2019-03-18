import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  techs: any;
  coverText: any;

	constructor() {
    this.techs = [
      { name: 'Angular', class: 'tech_angular', icon: '../../assets/images/angular.png' },
      { name: 'ExtJS', class: 'tech_extjs', icon: '../../assets/images/angular.png' },
      { name: 'D3', class: 'tech_d3', icon: '../../assets/images/angular.png' },
      { name: 'Material', class: 'tech_material', icon: '../../assets/images/angular.png' },
      { name: 'HTML', class: 'tech_html', icon: '../../assets/images/angular.png' },
      { name: 'CSS', class: 'tech_css', icon: '../../assets/images/angular.png' },
      { name: 'Node.js', class: 'tech_nodejs', icon: '../../assets/images/angular.png' },
      { name: 'Espress', class: 'tech_angular', icon: '../../assets/images/angular.png' },
      { name: 'Laravel', class: 'tech_laravel', icon: '../../assets/images/angular.png' },
      { name: 'PHP', class: 'tech_php', icon: '../../assets/images/angular.png' },
      { name: 'SQLite', class: 'tech_sqlite', icon: '../../assets/images/angular.png' },
      { name: 'MongoDB', class: 'tech_mongodb', icon: '../../assets/images/angular.png' },
    ];

    this.coverText = {
      header: '',
      header_org: "HI, I'M BRIAN MUSINYAN",
      desc: '',
      desc_org: 'A developer who enjoys building Web Applicaions and a good cup of coffee.'
    }
    this.writeText(20, 0, 'header', 'header_org');
    this.writeText(20, 0, 'desc', 'desc_org');
  }

	ngOnInit() {}

  writeText(timer, i, writeTo, readFrom) {
    if (i < this.coverText[readFrom].length) {
      this.coverText[writeTo] += this.coverText[readFrom].charAt(i);
      i++;

      setTimeout(() => { this.writeText(timer, i, writeTo, readFrom); }, timer);
    }
  }

}
