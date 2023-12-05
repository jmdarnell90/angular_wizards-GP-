import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songdetails',
  templateUrl: './songdetails.component.html',
  styleUrls: ['./songdetails.component.css'],
})
export class SongDetailsComponent implements OnInit {
  title: any;
  album: any;
  artist: any;
  duration: any;
  releaseDate: any;
  albumCoverUrl: any;

  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
