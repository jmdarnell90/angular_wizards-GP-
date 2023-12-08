import {FlatTreeControl, NestedTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeNestedDataSource, MatTreeModule, MatTreeFlatDataSource} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Playlist, PlaylistService, Song } from '../shared/playlist-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tree-nested-overview',
  templateUrl: 'tree-nested-overview.component.html',
  styleUrls: ['tree.component.css'],
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule, CommonModule],
})
export class TreeNestedOverview {
  playlists = this.playlistService.playlists$

  selectedPlaylist: Playlist | null = null

  constructor(private playlistService: PlaylistService) {}
}

