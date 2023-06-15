import { Component, OnInit } from '@angular/core';
import { Widget } from '../widget.interface';
import { WIDGET } from '../widget.token';

@Component({
  selector: 'app-weather-widget',
  styleUrls: ['weather-widget.component.scss'],
  templateUrl: 'weather-widget.component.html',
  providers: [{
    provide: WIDGET,
    useExisting: WeatherWidgetComponent
  }]
})

export class WeatherWidgetComponent implements Widget {

  isLoading: boolean = false;

  load(): void {
    console.log('Load data from Weather API');
  }

  refresh(): void {
    this.isLoading = true;
    setTimeout(() => this.isLoading = false, 1000);
  }
}