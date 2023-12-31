import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-songdetails',
  templateUrl: './songdetails.component.html',
  styleUrls: ['./songdetails.component.css'],
})
export class SongDetailsComponent {
  songDetail: SongDetail = {
    id: '',
    title: '',
    album: '',
    artist: '',
    duration: '',
    link: '',
    albumCoverUrl: '',
  };

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) {
    const routeParams = this.route.snapshot.paramMap;
    const id = routeParams.get('id')!;

    this.apiService.getSongDetailsById(id).subscribe((response) => {
      const song: any = response;
      const image = song.track.album.image[3];

      this.songDetail = {
        id: song.track.mbid,
        title: song.track.name,
        album: song.track.album.title,
        artist: song.track.artist.name,
        duration: this.millisToMinutesAndSeconds(song.track.duration),
        link: song.track.url,
        albumCoverUrl: image['#text'],
      };
    });
  }

  routeToUrl(): void {
    window.location.href = this.songDetail.link;
  }

  millisToMinutesAndSeconds(millis: any) {
    var minutes = Math.floor(millis / 60000);
    var seconds = +((millis % 60000) / 1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }
}

interface SongDetail {
  id: string;
  title: string;
  album: string;
  artist: string;
  duration: string;
  link: string;
  albumCoverUrl: string;
}
