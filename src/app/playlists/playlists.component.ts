import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Playlist, PlaylistService } from '../shared/playlist-service.service';

@Component({
  selector: 'playlists',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css'],
})
export class PlaylistComponent {
  title = 'playlist';

  selectedPlaylist: Playlist | null = null;
  selectedPlaylistIndex: number | null = null;

  public songForm = this.formBuilder.group({
    song: new FormControl('', Validators.required),
  });

  public playlistForm = this.formBuilder.group({
    name: new FormControl('', Validators.required),
  });

  public playlists$ = this.playlistService.playlists$;

  constructor(
    private playlistService: PlaylistService,
    private formBuilder: FormBuilder
  ) {}

  public selectPlaylist(playlist: Playlist, index: number) {
    this.selectedPlaylist = playlist;
    this.selectedPlaylistIndex = index;
  }

  deleteSong(idx: number, song: string) {
    this.playlistService.deleteSongFromPlaylist(idx, song);
  }

  submit() {
    if (this.songForm.invalid) return;

    const song = this.songForm.value.song;
    this.playlistService.addSongToPlaylist(this.selectedPlaylistIndex!, song!);

    this.songForm.reset();
  }

  playlistSubmit() {
    if (this.playlistForm.invalid) return;

    const playlistName = this.playlistForm.value.name;
    this.playlistService.addPlaylist(playlistName!);

    this.playlistForm.reset();
  }
}
