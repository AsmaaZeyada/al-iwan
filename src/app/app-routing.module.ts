import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/components/home/home.component';
import { ServicesComponent } from './pages/components/services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DownloadComponent } from './download/download.component';
import { AllprojectsComponent } from './allprojects/allprojects.component';
const routes: Routes = [
  { path: "", redirectTo:'home' , pathMatch: "full" },
  { path: "home", component:HomeComponent},
  { path: "services", component:ServicesComponent},
  { path:"contactus",component:ContactusComponent },
  {path:"download",component:DownloadComponent},
  {path:"allprojects",component:AllprojectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
