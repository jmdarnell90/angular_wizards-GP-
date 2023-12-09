import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SongAddComponent } from './song-add/song-add.component';
import { SonglistComponent } from './songlist/songlist.component';
import { SongDetailsComponent } from './songdetails/songdetails.component';
import { PlaylistComponent } from './playlists/playlists.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SongAddComponent,
    SonglistComponent,
    SongDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   PlaylistComponent,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
