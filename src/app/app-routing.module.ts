import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlaylistComponent } from './playlists/playlists.component';
import { SongDetailsComponent } from './songdetails/songdetails.component';
import { SongAddComponent } from './songadd/songadd.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'playlist',
    component: PlaylistComponent,
  },
      {
        path: 'details',
        component: SongDetailsComponent,
      }
  ,
  {
    path: 'songadd',
    component: SongAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
