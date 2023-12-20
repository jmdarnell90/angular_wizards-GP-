import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-songdetails',
  templateUrl: './songdetails.component.html',
  styleUrls: ['./songdetails.component.css'],
})
export class SongDetailsComponent {
  songDetail: SongDetail;

  constructor(private route: ActivatedRoute) {
    const routeParams = this.route.snapshot.paramMap;
    const id = routeParams.get('id')!;

    // grab song from service by id

    // not keeping this
    this.songDetail = {
      id: id,
      title: 'Title',
      album: 'Album',
      artist: 'Artist',
      duration: 'Time',
      releaseDate: 'Release Date',
      albumCoverUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BlSkuEGt8snTBf84fX4WaH8x_0rY9L0qjw&usqp=CAU',
    };
  }
}

interface SongDetail {
  id: string;
  title: string;
  album: string;
  artist: string;
  duration: string;
  releaseDate: string;
  albumCoverUrl: string;
}

