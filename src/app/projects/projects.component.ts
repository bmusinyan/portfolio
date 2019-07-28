import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
    jsonxml: Array<object> = [];

	constructor() {
        const xml = [{
            id: '111',
            name: 'start application'
        }, {
            id: '222',
            name: 'click on image',
            command: [{
                id: '222111',
                name: 'type text'
            }, {
                id: '222222',
                name: 'function key'
            }, {
                id: '222333',
                name: 'wait'
            }]
        }, {
            id: '333',
            name: 'close application'
        }];

        this.getJSONxml(xml, 1);
    }

	ngOnInit() {}

    getJSONxml(xml, depth) {
        for (const item of xml) {
            const hasChildren = item.hasOwnProperty('command') && item.command.length > 0;

            if (item.hasOwnProperty('id')) {
                this.jsonxml.push({
                    id: item.id,
                    name: item.name,
                    level: depth,
                    command: hasChildren
                });
            }

            if (hasChildren) {
                const index = depth + 1;
                this.getJSONxml(item.command, index);
            }
        }
    }
}
