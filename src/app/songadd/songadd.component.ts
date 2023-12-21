import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { ApiService } from '../shared/api.service';
import { PlaylistService } from '../shared/playlist-service.service';


@Component({
  selector: 'app-songadd',
  standalone: true,
  templateUrl: './songadd.component.html',
  styleUrls: ['./songadd.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class SongAddComponent {
  private data: any = [];
  _track: any = [];
  _album: any = [];
  _artist: any = [];
  _wiki: any = [];
  _image: string = '';
  _url: string = '';

  public playlists$ = this.playlistService.playlists$;

  constructor(
    private apiService: ApiService,
    private playlistService: PlaylistService,
    private formBuilder: FormBuilder
  ) {}

  public songAddForm = this.formBuilder.group({
    song: new FormControl('', Validators.required),
  })

  getDetails(artist: string, song: string) {
    this.apiService.getSongDetails(artist, song).subscribe((res) => {
      this.data = res;
      this._track = this.data.track;
      this._album = this.data.track.album;
      this._artist = this.data.track.artist;
      this._wiki = this.data.track.wiki;
      this._image = this.data.track.album.image[2]['#text'];
      this._url = this.data.track.url;
      console.log(this.data);
    });
  }

  submit() {
     if (this.songAddForm.invalid) return;

    const playlist = this.songAddForm.value.song;
    this.playlistService.addSongToPlaylist(+playlist!, {
      artist: this._artist.name,
      name: this._track.name
    })
  //   if (this._track.invalid) return;

  //   const song = this._track.name;
  //   this.playlistService.addSongToPlaylist(this.selectedPlaylistIndex!, song!);

     this.songAddForm.reset();
   }

}
