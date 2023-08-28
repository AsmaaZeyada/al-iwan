import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DownloadComponent } from './download/download.component';
import { AllprojectsComponent } from './allprojects/allprojects.component';
import { CardProjectComponent } from './shared/card-project/card-project.component';
import { ComponentsComponent } from './core/components/components.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactusComponent,
    DownloadComponent,
    AllprojectsComponent,
    CardProjectComponent,
    ComponentsComponent
  ],
  imports: [
    HomeComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
