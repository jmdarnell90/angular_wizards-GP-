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



// let JSONDatas = [
//   {"playlist": "Chassidy's Chart Toppers", 'artist': 'artist1', 'song': 'song1'},
//   {"playlist": "Chassidy's Chart Toppers", 'artist': 'artist2', 'song': 'song2'},
//   {"playlist": "Chassidy's Chart Toppers", 'artist': 'artist3', 'song': 'song3'},
//   {"playlist": "Justin's Jukebox", 'artist': 'artist4', 'song': 'song4'},
//   {"playlist": "Justin's Jukebox", 'artist': 'artist5', 'song': 'song5'},
//   {"playlist": "Justin's Jukebox", 'artist': 'artist6', 'song': 'song6'},
//   {"playlist": "Tom's Top Tracks", 'artist': 'artist7', 'song': 'song7'},
//   {"playlist": "Tom's Top Tracks", 'artist': 'artist8', 'song': 'song8'},
//   {"playlist": "Tom's Top Tracks", 'artist': 'artist9', 'song': 'song9'},
// ]
