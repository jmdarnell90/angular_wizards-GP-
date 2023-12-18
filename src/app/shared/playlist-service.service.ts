import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Playlist {
  name: string;
  songs: Song[];
}

export interface Song {
  artist: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  private _playlists = new BehaviorSubject<Playlist[]>([
  ]);

  public readonly playlists$ = this._playlists.asObservable();

  public addPlaylist(playlistName: string) {
    const playlist: Playlist = {
      name: playlistName,
      songs: [],
    };
    this._playlists.getValue().push(playlist);
    this._playlists.next(this._playlists.getValue());
    this.save()
  }

  public addSongToPlaylist(playlistIndex: number, song: Song) {
    const playlists = this._playlists.getValue();
    if (playlistIndex >= 0 && playlistIndex < playlists.length) {
      playlists[playlistIndex].songs.push(song);
      this._playlists.next(playlists);
      this.save()

    } else {
      console.error(`Playlist index ${playlistIndex} is out of bounds.`);
    }
  }

  public deleteSongFromPlaylist(playlistIndex: number, song: Song) {
    const playlists = this._playlists.getValue();
    if (playlistIndex >= 0 && playlistIndex < playlists.length) {
      const index = playlists[playlistIndex].songs.indexOf(song);
      if (index > -1) {
        playlists[playlistIndex].songs.splice(index, 1);
        this._playlists.next(playlists);
        this.save()
      } else {
        console.error(
          `Song ${song} does not exist in playlist ${playlistIndex}.`
        );
      }
    } else {
      console.error(`Playlist index ${playlistIndex} is out of bounds.`);
    }
  }

  save() {
    localStorage.setItem('playlists', JSON.stringify(this._playlists.value));
  }
  fetch() {
    const storedData = localStorage.getItem('playlists') || '[]';
    this._playlists.next(JSON.parse(storedData));
  }
}