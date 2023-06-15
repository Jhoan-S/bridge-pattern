import { Component, ContentChild, OnInit } from '@angular/core';
import { WIDGET } from '../widgets/widget.token';
import { Widget } from '../widgets/widget.interface';

@Component({
  selector: 'app-widget-wrapper',
  styleUrls: ['widget-wrapper.component.scss'],
  templateUrl: 'widget-wrapper.component.html'
})

export class WidgetWrapperComponent implements OnInit {

  @ContentChild(WIDGET, { static: true }) widget!: Widget;

  ngOnInit() {
    this.widget.load();
  }

  onRefresh(): void {
    this.widget.refresh();
  }
}