import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { AdminViewfeedPageComponent } from './admin-viewfeed-page/admin-viewfeed-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Feed2Component } from './feed2/feed2.component';
import { AgGridModule } from 'ag-grid-angular'; 
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component';
import { DisplayDialogComponent } from './display-dialog/display-dialog.component';
import { DefaultService } from './Services/default.service';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackPageComponent,
    AdminViewfeedPageComponent,
    MainPageComponent,
    Feed2Component,
    LoginPageComponent,
    DisplayDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule,
    HttpClientModule,
  ],
  providers: [DefaultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
