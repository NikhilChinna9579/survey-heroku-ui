import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminViewfeedPageComponent } from './admin-viewfeed-page/admin-viewfeed-page.component';
import { Feed2Component } from './feed2/feed2.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  {path:'',component:MainPageComponent},
  {path:'viewfeed',component:AdminViewfeedPageComponent},
  {path:'feedback',component:FeedbackPageComponent},
  {path:'login',component:LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
