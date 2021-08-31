import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { EntertainmentnewsComponent } from './entertainmentnews/entertainmentnews.component';
import { HealthnewsComponent } from './healthnews/healthnews.component';
import { TechnewsComponent } from './technews/technews.component';
import { SportsnewsComponent } from './sportsnews/sportsnews.component'
import { SciencenewsComponent } from './sciencenews/sciencenews.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
  {path: '', component:TopheadingComponent}, //home
  {path: 'tech', component:TechnewsComponent}, //Tech
  {path: 'business', component:BusinessnewsComponent}, //Tech
  {path: 'entertainment', component:EntertainmentnewsComponent}, //Entertainment
  {path: 'health', component:HealthnewsComponent}, //Health
  {path: 'sports', component:SportsnewsComponent}, //sports
  {path: 'science', component:SciencenewsComponent}, //sports
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
