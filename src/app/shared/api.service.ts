import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // API_KEY = ''

  constructor(private httpClient: HttpClient) {}

  getArtist(query: string) {
    let searchTerm = query.replace(' ', '%20');
    let url = 'https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=' + searchTerm + '&api_key=00e8b5ac96892ec9c27ac8f763125b4e&format=json';

    return this.httpClient.get(url);

    // console.log(this.httpClient.get(url));
  }
}

// http GET 'https://api.spotify.com/v1/search?q=kiss&type=artist&market=US&limit=1&offset=0' \
