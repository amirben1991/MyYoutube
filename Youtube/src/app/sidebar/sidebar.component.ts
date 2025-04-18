import { Component } from '@angular/core';
import { AuthService } from '../models/auth-service.service';
import { PlaylistService } from '../models/playlist.service';


@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  playlists: any[] = [];
  playlistService: any;

//   constructor(public authService: AuthService, private playlistService: PlaylistService) {}

//   ngOnInit() {
//     if (this.authService.isLoggedIn()) {
//       this.playlists = this.playlistService.getUserPlaylists();
//     }
//   }

remove(index: number) {
  this.playlistService.removeVideo(index);
  this.playlists = this.playlistService.getUserPlaylists();
}


}
