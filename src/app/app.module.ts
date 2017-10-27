import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
import { MainAppComponent } from './main-app/main-app.component';
import { LogListComponent } from './log-list/log-list.component';
import { SimpleMenuComponent } from './simple-menu/simple-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavDrawerComponent,
    MainAppComponent,
    LogListComponent,
    SimpleMenuComponent
  ],
  imports: [
    BrowserModule,
		HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
