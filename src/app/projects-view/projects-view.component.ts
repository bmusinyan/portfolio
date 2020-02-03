import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-projects-view',
    templateUrl: './projects-view.component.html',
    styleUrls: ['./projects-view.component.css']
})
export class ProjectsViewComponent implements OnInit {
    // initialization
    public projects: Array<Object>;

    public localCity:Object;

    public projectPos:number;

    private weatherAPI: string = "b52e1cb9298a04a484c4d43e40804dda";

    constructor() {
        //
        this.projects = [
            { name: 'Weather project', description: 'get info from API' },
            { name: 'TODO project', description: 'some info about project' },
            { name: 'TODO project', description: 'some info about project' },
            { name: 'TODO project', description: 'some info about project' },
            { name: 'TODO project', description: 'some info about project' },
            { name: 'TODO project', description: 'some info about project' },
            { name: 'TODO project', description: 'some info about project' },
            { name: 'TODO project', description: 'some info about project' }
        ];

        this.getLocalWeatherInfo();
        this.projectPos = 0;
    }

    ngOnInit() {}

    public setProject(project, index) {
      this.projectPos = index;
    }

    public getLocalWeatherInfo() {
      // const ajax = new XMLHttpRequest();
      // const localcity = "Glendale";

      // ajax.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + localcity + '&appid=' + this.weatherAPI, false);
      // ajax.send();

      // this.localCity = JSON.parse(ajax.responseText);

      this.localCity = {
        "coord": { "lon": -118.25, "lat": 34.14 },
        "weather": [
          { "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }
        ],
        "base": "stations",
        "main": {
          "temp": 293.99,
          "pressure": 1013,
          "humidity": 64,
          "temp_min": 290.93,
          "temp_max": 298.15
        },
        "visibility": 16093,
        "wind": { "speed": 4.1, "deg": 130 },
        "clouds": { "all": 1 },
        "dt": 1564375138,
        "sys": {
          "type": 1,
          "id": 3514,
          "message": 0.0105,
          "country": "US",
          "sunrise": 1564318865,
          "sunset": 1564369060
        },
        "timezone": -25200,
        "id": 5352423,
        "name": "Glendale",
        "cod": 200
      }
    }
}
