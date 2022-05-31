import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  cityName: string = 'Kyiv';
  weatherData?: WeatherData;
  currentTime: number = 0;
  
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
    this.currentTime = this.getCurrentTime();
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe((response) => {
      this.weatherData = response;
      console.log(response);
    });
  }

  getCurrentTime() {
    let today: Date = new Date();
    let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
    return +hours;
  }
}
