import { Injectable } from '@angular/core';
import { AuthService } from './auth-service.service';

@Injectable({ providedIn: 'root' })
export class PlaylistService {
  constructor(private authService: AuthService) {}

  private getKey(): string {
    return `playlist_${this.authService.currentUser?.username}`;
  }

  getUserPlaylists(): any[] {
    const key = this.getKey();
    return JSON.parse(localStorage.getItem(key) || '[]');
  }

  addVideo(video: any) {
    const key = this.getKey();
    const playlist = this.getUserPlaylists();
    playlist.push(video);
    localStorage.setItem(key, JSON.stringify(playlist));
  }

  removeVideo(index: number) {
    const key = this.getKey();
    const playlist = this.getUserPlaylists();
    playlist.splice(index, 1);
    localStorage.setItem(key, JSON.stringify(playlist));
  }
}
