import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SongAddComponent } from './songadd/songadd.component';
import { PlaylistComponent } from './playlists/playlists.component';
import { SongDetailsComponent } from './songdetails/songdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SongDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SongAddComponent,
    PlaylistComponent,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
