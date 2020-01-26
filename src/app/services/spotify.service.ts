import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  newSongs: any[] = [];

  constructor(private http: HttpClient) { }

  getQuery( query: String ){

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAK9irjR9EXmLMeSX2nkpMUM2lUyGpEHZGrTJfBBzP6tO_VBz3ZH5jeYaB7XzXYAiQpgrnNsf46I6gp12Y'
    })

    return this.http.get(url, { headers })

  }

  getNewReleases() {
    
    return this.getQuery('browse/new-releases').pipe(map(data => data['albums'].items));

  }

  getArtists(termino: String) {
   
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(data => data['artists'].items));

  }

  getArtist(artistId: String) {
   
    return this.getQuery(`artists/${artistId}`);

  }

  getTopTraks(artistId: String) {
   
    return this.getQuery(`artists/${artistId}/top-tracks/?country=ES`).pipe(map(data => data['tracks']));

  }


}
