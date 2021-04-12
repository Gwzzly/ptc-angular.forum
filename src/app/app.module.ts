import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { CustomJsonConvert } from './core/json/json-converter.utils';
import { ForumModule } from './modules/forum/forum.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [
    HttpClient,
    CustomJsonConvert
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
