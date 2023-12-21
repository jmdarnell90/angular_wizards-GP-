import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API_KEY = '00e8b5ac96892ec9c27ac8f763125b4e';
  startUrl = 'https://ws.audioscrobbler.com/2.0/?method=track.getInfo&';
  endUrl = `&api_key=${this.API_KEY}&format=json`;

  constructor(private httpClient: HttpClient) {}

  getSongDetails(artist: string, song: string) {
    const artistSearch = artist.replace(' ', '%20');
    const songSearch = song.replace(' ', '%20');
    const url = `${this.startUrl}artist=${artistSearch}&track=${songSearch}${this.endUrl}`;

    return this.httpClient.get(url);
  }

  getSongDetailsById(mbdid: string) {
    const url = `${this.startUrl}mbid=${mbdid}${this.endUrl}`;

    return this.httpClient.get(url);
  }
}
