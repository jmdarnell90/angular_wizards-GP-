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

  getArtist(query: string) {
    this.apiService.getArtist(query).subscribe((item: any) => {
      console.log(item);
    });
  }
}
