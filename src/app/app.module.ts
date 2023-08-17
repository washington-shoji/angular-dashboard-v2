import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { BodyComponent } from './components/body/body.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DashboardService } from "./components/dashboard/dashboard.service";
import { HttpClientModule } from "@angular/common/http";

const materialModules: MatIconModule[] = [MatIconModule];

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    materialModules,
  ],
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavbarComponent,
    DashboardComponent,
    StatisticsComponent,
    SettingsComponent,
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
