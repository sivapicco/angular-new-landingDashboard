import {Component, OnInit, AfterViewInit, NgZone} from '@angular/core';
import {Widget} from '../shared/widgets';
import {WidgetService} from '../services/widget.service';
import {ViewChild, ElementRef} from '@angular/core';

declare var tableau: any;

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    providers: [WidgetService]
})
export class LandingComponent implements OnInit, AfterViewInit {
    @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;
    public listview = false;
    public widgetview = true;
    public categories: any[];
    public variable: any;
    // public cateSelected: any[];
    widgets: Widget[];
    temwidgets: Widget[];
    viz: any[] = [];
    name: Widget[] = [];
    checkCondition: any = [];
    public widgetData: any = [];
    public unCheckData: any = [];
    checkmodules: any = [];
    dragondrop: any = [];
    widgetList: any = [];

    constructor(private widgetservice: WidgetService, private _ngZone: NgZone) {
    }

    ngOnInit() {
        this.temwidgets = this.widgetservice.getwidgets();
        this.temwidgets = this.temwidgets.filter(widget => widget.widgetApp !== 'DISABLED');
        this.widgets = this.temwidgets;
        this.widgetList = this.temwidgets;
        this.categories = this.widgets.map(wid => wid.category);
        this.categories = Array.from(new Set(this.categories));
        this.name = this.temwidgets;
        this.widgetData = [];
        this.temwidgets.forEach((value, index) => {
            this.checkCondition[value.widgetkey] = false;
        });
        console.log(' this.widgetList', this.widgetList);
    }

    ngAfterViewInit() {
        if (this.temwidgets.length !== 0) {

            this._ngZone.run(() => {
                this.createViz(0);
            });
        }
    }

    createViz(i: number) {
        let options: any;
        const j = i;
        const placeholderDiv = document.getElementById(this.widgets[i].container);

        const url = this.widgets[i].url;
        options = {
            hideTabs: true,
            hideToolbar: true,
            onFirstInteractive: () => {
            },
            onFirstVizSizeKnown: () => {
                if ((j + 1 < this.temwidgets.length)) {
                    setTimeout(() => {
                        this._ngZone.run(() => {
                            this.createViz(j + 1);
                        });
                    }, 200);
                }
            }
        };
        this.viz[i] = new tableau.Viz(placeholderDiv, url, options);
    }

    public enablewidgetview() {
        this.widgetview = true;
        this.listview = false;
    }

    public enablelistview() {
        this.widgetview = false;
        this.listview = true;
    }

    // Sortin By Title A-Z
    public sortByAz() {
        // alert('sortByAz');
        this.name.sort(function (name1, name2) {
            if (name1.name < name2.name) {
                // alert('sortByAz2');
                return -1;
            } else if (name1.name > name2.name) {
                return 1;
            } else {
                return 0;
            }
        });
        // alert('sortByAz3');
    }

    // Sortin By Title Z-A
    public sortByZa() {
        // alert('sortByZa');
        this.name.sort(function (name1, name2) {
            if (name1.name > name2.name) {
                return -1;
            } else if (name1.name < name2.name) {
                return 1;
            } else {
                return 0;
            }
        });
    }

    // Sort By Category A-Z
    public sortByCatAz() {
        // alert('sortByAz');
        this.name.sort(function (name1, name2) {
            if (name1.category < name2.category) {
                // alert('sortByAz2');
                return -1;
            } else if (name1.category > name2.category) {
                return 1;
            } else {
                return 0;
            }
        });
        // alert('sortByAz3');
    }

    // Sort By Category Z-A
    public sortByCatZa() {
        // alert('sortByAz');
        this.name.sort(function (name1, name2) {
            if (name1.category > name2.category) {
                // alert('sortByAz2');
                return -1;
            } else if (name1.category < name2.category) {
                return 1;
            } else {
                return 0;
            }
        });
        // alert('sortByAz3');
    }

    // Applying filter on selected category of widgets

    onCatSelected(val: any) {
        this.variable = val;
        this.customFunction(val);
    }

    customFunction(val: any) {
        if (val === 'All') {
            this.widgets = this.temwidgets;
        } else {
            this.widgets = this.temwidgets.filter(widget => widget.category === val);
        }
    }

    filter(query: string) {
        // console.log(query);
        this.widgets = this.temwidgets.filter(w => w.name.toLowerCase().includes(query.toLowerCase()));
    }

    filter1(query1: string) {

        this.widgetList = this.temwidgets.filter(w => w.name.toLowerCase().includes(query1.toLowerCase()));
    }

    open(event, widget) {
        if (event.target.checked === true) {
            this.widgetData.push(widget);
        }
        if (event.target.checked === false) {
            this.unCheckData.push(widget);
            this.unCheckData.forEach((value, index) => {
                this.widgetData = this.widgetData.filter(_value => {
                    if (value.widgetkey === _value.widgetkey) {
                        return false;
                    } else {
                        return true;
                    }
                });
            });
        }
        this.unCheckData = [];
    }

    saveData() {
        this.widgets = this.widgetData;
        this.closeAddExpenseModal.nativeElement.click();
    }

    removeWidget(i) {
        this.checkmodules[i.widgetkey] = false;
        this.unCheckData.push(i);
        this.unCheckData.forEach((value, index) => {
            this.widgetData = this.widgetData.filter(_value => {
                if (value.widgetkey === _value.widgetkey) {
                    return false;
                } else {
                    return true;
                }
            });
        });
    }

    dragEnd(event, data) {
        this.checkmodules[data.widgetkey] = false;
        this.dragondrop.push(data);
        this.dragondrop.forEach((value, index) => {
            this.widgetData = this.widgetData.filter(_value => {
                if (value.widgetkey === _value.widgetkey) {
                    return false;
                } else {
                    return true;
                }
            });
        });
        this.dragondrop = [];
    }
}
