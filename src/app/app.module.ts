import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { SonglistComponent } from './songlist/songlist.component';
import { SongDetailsComponent } from './songdetails/songdetails.component';
import { TreeNestedOverview } from './tree/tree.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaylistsComponent,
    SonglistComponent,
    SongDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TreeNestedOverview
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
