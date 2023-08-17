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
import { BookService } from "./components/book/book.service";
import { HttpClientModule } from "@angular/common/http";
import { BookComponent } from './components/book/book.component';
import { BookDialogComponent } from './components/book/book-dialog/book-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

const materialModules: MatIconModule[] = [
  MatIconModule,
  MatDialogModule,
  MatButtonModule
];

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
    BookComponent,
    BookDialogComponent,
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule { }
