import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Song = {
  songName: string;
  songArtist: string;
  albumCoverImg: string;
  songDurration: number;
}

export type Playlist= {
  name: string;
  songs?: Song[];
}

const fakePlaylist: Playlist[] = [
  {
    name: 'My Playlist',
    songs: [
      {
        albumCoverImg: 'asdf',
        songArtist: 'asdf',
        songDurration: 1234,
        songName: 'Cool Song',
      },
    ],
  },
  {
    name: 'My Playlist 2',
    songs: [
      {
        albumCoverImg: 'asdf',
        songArtist: 'asdf',
        songDurration: 1234,
        songName: 'Awesome song',
      },
    ],
  },
  {
    name: 'My Playlist 3',
    songs: [
      {
        albumCoverImg: 'asdf',
        songArtist: 'asdf',
        songDurration: 1234,
        songName: 'Final Song',
      },
    ],
  },

];

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  public playlists$ = new BehaviorSubject<Playlist[]>(fakePlaylist);
}
