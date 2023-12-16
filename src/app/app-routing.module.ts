import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PlaylistComponent } from './playlists/playlists.component';
import { SonglistComponent } from './songlist/songlist.component';
import { SongDetailsComponent } from './songdetails/songdetails.component';
import { SongAddComponent } from './song-add/song-add.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'playlist',
    component: PlaylistComponent,
  },
  {
    path: 'songlist',
    children: [
      {
        path: ':id/details',
        component: SongDetailsComponent
      },
      {
        path: '',
        component: SonglistComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
