import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Playlist} from './Playlist';
import {Song} from '../song/Song';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private url = 'http://localhost:8083/api/playlist';

  constructor(private http: HttpClient) {
  }

  getPlaylist(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.url);
  }

  getPlaylistById(id: number): Observable<Playlist> {
    return this.http.get<Playlist>(this.url + '/' + id);
  }

  addPlaylist(formData: FormData): Observable<any> {
    return this.http.post(this.url, formData);
  }

  editPlaylist(formData: FormData): Observable<any> {
    return this.http.put(this.url, formData);
  }

  searchByNamePlaylist(namePlaylist: string): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.url + '-search/' + namePlaylist);
  }

  deletePlaylist(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

  getLikePlaylistByPlaylist(playlist: Playlist): Observable<any> {
    return this.http.get(this.url + '-like/' + playlist.id);
  }

  deleteLike(id: number): Observable<any> {
    return this.http.delete(this.url + '-like/' + id);
  }

  addLike(formData: FormData): Observable<any> {
    return this.http.post<any>(this.url + '-like', formData);
  }
}
