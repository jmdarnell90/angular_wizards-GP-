import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { SonglistComponent } from './songlist/songlist.component';
import { SongDetailsComponent } from './songdetails/songdetails.component';

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
    path: 'playlists',
    component: PlaylistsComponent,
  },
  {
    path: 'songlist',
    children: [
      {
        path: ':id/details',
        component: SongDetailsComponent,
      },
      {
        path: '',
        component: SonglistComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
