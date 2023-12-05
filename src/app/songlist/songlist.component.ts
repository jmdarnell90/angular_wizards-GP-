import { Component } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-songlist',
  templateUrl: './songlist.component.html',
  styleUrls: ['./songlist.component.css'],
})
export class SonglistComponent {
  songDetails: any;

  constructor(private apiService: ApiService) {}

  getDetails(artist: string, song: string){
    if (song != "undefined" && song)
      this.apiService.getSongDetails(artist, song).subscribe((songDetails: any) => {
        console.log(songDetails);
      })
      else {
        this.apiService.getArtist(artist).subscribe((top50songs: any)=>{
          console.log(top50songs)
        })
      };
    }
  }
