import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SearchService {
  searchVideos(query: string): any[] {
    return [
      { title: `Résultat pour "${query}" #1`, thumbnail: 'https://via.placeholder.com/320x180' },
      { title: `Résultat pour "${query}" #2`, thumbnail: 'https://via.placeholder.com/320x180' },
      { title: `Résultat pour "${query}" #3`, thumbnail: 'https://via.placeholder.com/320x180' }
    ];
  }
}
