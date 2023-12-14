// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// export type Song = {
//   songName: string;
//   songArtist: string;
//   albumCoverImg: string;
//   songDurration: number;
// }

// export type Playlist= {
//   name: string;
//   songs?: Song[];
// }

// const fakePlaylist: Playlist[] = [
//   {
//     name: 'My Playlist',
//     songs: [
//       {
//         albumCoverImg: 'asdf',
//         songArtist: 'asdf',
//         songDurration: 1234,
//         songName: 'Cool Song',
//       },
//     ],
//   },
//   {
//     name: 'My Playlist 2',
//     songs: [
//       {
//         albumCoverImg: 'asdf',
//         songArtist: 'asdf',
//         songDurration: 1234,
//         songName: 'Awesome song',
//       },
//     ],
//   },
//   {
//     name: 'My Playlist 3',
//     songs: [
//       {
//         albumCoverImg: 'asdf',
//         songArtist: 'asdf',
//         songDurration: 1234,
//         songName: 'Final Song',
//       },
//     ],
//   },

// ];

// @Injectable({
//   providedIn: 'root',
// })
// export class PlaylistService {
//   public playlists$ = new BehaviorSubject<Playlist[]>(fakePlaylist);
// }

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Playlist {
  name: string;
  songs: string[];
}

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  private _playlists = new BehaviorSubject<Playlist[]>([
    {
      name: 'Coding',
      songs: ['song1', 'song2', 'song3'],
    },
    {
      name: 'Gym',
      songs: ['song4', 'song5', 'song6'],
    },
    {
      name: 'Sleep',
      songs: ['song7', 'song8', 'song9'],
    },
  ]);

  public readonly playlists$ = this._playlists.asObservable();

  public addPlaylist(playlistName: string) {
    const playlist: Playlist = {
      name: playlistName,
      songs: [],
    };
    this._playlists.getValue().push(playlist);
    this._playlists.next(this._playlists.getValue());
  }

  public addSongToPlaylist(playlistIndex: number, song: string) {
    const playlists = this._playlists.getValue();
    if (playlistIndex >= 0 && playlistIndex < playlists.length) {
      playlists[playlistIndex].songs.push(song);
      this._playlists.next(playlists);
    } else {
      console.error(`Playlist index ${playlistIndex} is out of bounds.`);
    }
  }

  public deleteSongFromPlaylist(playlistIndex: number, song: string) {
    const playlists = this._playlists.getValue();
    if (playlistIndex >= 0 && playlistIndex < playlists.length) {
      const index = playlists[playlistIndex].songs.indexOf(song);
      if (index > -1) {
        playlists[playlistIndex].songs.splice(index, 1);
        this._playlists.next(playlists);
      } else {
        console.error(
          `Song ${song} does not exist in playlist ${playlistIndex}.`
        );
      }
    } else {
      console.error(`Playlist index ${playlistIndex} is out of bounds.`);
    }
  }
}
