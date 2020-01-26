import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista: any = {};
  loading: boolean;
  topTraks: any[] = [];

  constructor(private router: ActivatedRoute, private artist: SpotifyService) {

    this.router.params.subscribe(params => {

      this.getArtist(params['id']);
      this.getTopTraks(params['id']);

    })

  }

  getArtist(artistId: String) {

    this.loading = true;
    this.artist.getArtist(artistId).subscribe(artist => {
      
      this.artista = artist;
      this.loading = false;

    });

  }

  getTopTraks( artistId: String) {

    this.artist.getTopTraks(artistId).subscribe( topTraks => {

      console.log(topTraks);
      this.topTraks = topTraks;

    })
  }

}
