import { Component } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-song-add',
  templateUrl: './song-add.component.html',
  styleUrls: ['./song-add.component.css']
})
export class SongAddComponent {

  private data: any = [];
  _track: any = [];
  _album: any = [];
  _artist: any = [];
  _wiki: any = [];
  _image: string = '';
  _url: string = '';

  constructor(private apiService: ApiService) {}

  getDetails(artist: string, song: string){
    this.apiService.getSongDetails(artist, song).subscribe((res)=>{
      this.data = res;
      this._track = this.data.track;
      this._album = this.data.track.album;
      this._artist = this.data.track.artist;
      this._wiki = this.data.track.wiki;
      this._image = this.data.track.album.image[2]["#text"];
      this._url = this.data.track.url;
      console.log(this.data)
    })

    // if (song != "undefined" && song)
    //   this.apiService.getSongDetails(artist, song).subscribe((songDetails: any) => {
    //     console.log(songDetails);
    //   })
    //   else {
    //     this.apiService.getArtist(artist).subscribe((top50songs: any)=>{
    //       console.log(top50songs)
    //     })
    //   };
    }
  }
