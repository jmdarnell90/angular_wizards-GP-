import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API_KEY = '00e8b5ac96892ec9c27ac8f763125b4e';

  constructor(private httpClient: HttpClient) {}

  getSongDetails(artist: string, song: string) {
    const artistSearch = artist.replace(' ', '%20');
    const songSearch = song.replace(' ', '%20');
    const url = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&artist=${artistSearch}&track=${songSearch}&api_key=${this.API_KEY}&format=json`;

    return this.httpClient.get(url);
  }

  getSongDetailsById(mbdid: string) {
    const url = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&mbid=${mbdid}&api_key=${this.API_KEY}&format=json`;

    return this.httpClient.get(url);
  }
}
