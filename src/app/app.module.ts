import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChipsBarComponent } from './chips-bar/chips-bar.component';
import { VideoContentComponent } from './video-content/video-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatRippleModule} from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    ChipsBarComponent,
    VideoContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatTooltipModule,
    MatCardModule,
    MatRippleModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
