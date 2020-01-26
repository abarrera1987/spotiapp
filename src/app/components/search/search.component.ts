import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistResult: any[] = [];
  loading: boolean;

  constructor(private artist: SpotifyService) {

    
  }

  buscar(termino: String) {
    this.loading = true;
    this.artist.getArtists(termino).subscribe((response: any) => {
      this.artistResult = response;
      this.loading = false;
    });

  }
}
