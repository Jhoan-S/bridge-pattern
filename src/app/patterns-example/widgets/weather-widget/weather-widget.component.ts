import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  styleUrls: ['weather-widget.component.scss'],
  templateUrl: 'weather-widget.component.html'
})

export class WeatherWidgetComponent {

  isLoading: boolean = false;

  loadData(): void {
    console.log('Load data from Weather API');
  }

  refresh(): void {
    this.isLoading = true;
    setTimeout(() => this.isLoading = false, 1000);
  }
}