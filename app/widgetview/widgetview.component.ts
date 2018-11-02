import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Widget } from '../shared/widgets';
import { WidgetService } from '../services/widget.service';

declare var tableau: any;

@Component({
  selector: 'app-widgetview',
  templateUrl: './widgetview.component.html',
  styleUrls: ['./widgetview.component.scss'],
  providers: [WidgetService]
})
export class WidgetviewComponent implements OnInit, AfterViewInit {

  widgets: Widget[];
  viz: any;

  constructor(private widgetservice: WidgetService) { }

  ngOnInit() {

    this.widgets = this.widgetservice.getwidgets();
    this.widgets = this.widgets.filter( widget => widget.widgetApp !== 'DISABLED');

  }

  ngAfterViewInit() {
    this.createViz();
  }

  createViz() {
    const placeholderDiv = document.getElementById(this.widgets[1].container);
    const url = this.widgets[1].url;
    const options = {
      width: '100%',
      height: '100%',
      hideTabs: true,
      hideToolbar: true,
      onFirstInteractive: function () {
      }
    };
    this.viz = new tableau.Viz(placeholderDiv, url, options);
  }

}
