import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragAndDropModule } from 'angular-draggable-droppable';

import { AppComponent } from './app.component';
import { WidgetviewComponent } from './widgetview/widgetview.component';
import { ListviewComponent } from './listview/listview.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
    declarations: [
        AppComponent,
        WidgetviewComponent,
        ListviewComponent,
        LandingComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        DragAndDropModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
