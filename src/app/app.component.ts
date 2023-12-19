import { Component } from '@angular/core';
import { PlaylistService } from './shared/playlist-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Group_Project';

  constructor(private playlistService: PlaylistService){}

  ngOnInit(){
    this.playlistService.fetch();
  }
}
