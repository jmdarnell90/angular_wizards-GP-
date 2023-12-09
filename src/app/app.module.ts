import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SongAddComponent } from './song-add/song-add.component';
import { SonglistComponent } from './songlist/songlist.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { SongDetailsComponent } from './songdetails/songdetails.component';
import { TreeNestedOverview } from './tree/tree.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaylistsComponent,
    SongAddComponent,
    SonglistComponent,
    SongDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TreeNestedOverview,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
