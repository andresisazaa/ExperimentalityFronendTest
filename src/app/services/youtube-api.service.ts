import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Video } from '../models/video.model';

@Injectable({
  providedIn: 'root'
})
export class YoutubeAPIService {
  private API_URL = 'https://www.googleapis.com/youtube/v3'
  private API_KEY = 'AIzaSyBvgoP0HATyjue9DAjRyq7LHOuVkUHxDO8';
  constructor(private http: HttpClient) { }

  searchByQuery(query: string): Observable<Video[]> {
    const params = new HttpParams()
      .set('key', this.API_KEY)
      .set('q', query)
      .set('part', 'snippet')
      .set('maxResults', '6');
    return this.http.get(`${this.API_URL}/search`, { params })
      .pipe(map(response => {
        let results = response['items'];
        let videos: Video[] = [];
        Object.keys(results).forEach(item => {
          const id = results[item]['id']['videoId'];
          const { title, description } = results[item]['snippet'];
          const thumbnail = results[item]['snippet']['thumbnails']['medium']['url'];
          const video: Video = { id, title, description, thumbnail };
          videos.push(video);
        });
        return videos;
      }));
  }
}
