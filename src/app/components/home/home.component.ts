import { Component, OnInit } from '@angular/core';
import { YoutubeAPIService } from 'src/app/services/youtube-api.service';
import { Video } from 'src/app/models/video.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  videos: Video[] = [];
  selectedVideo: Video;
  message: string;
  loading: boolean;

  constructor(private YoutubeAPI: YoutubeAPIService) { }

  ngOnInit() {
    this.search('The NBHD');
  }

  search(query: string) {
    console.log(query);
    this.loading = true;
    this.YoutubeAPI.searchByQuery(query).subscribe((videos: Video[]) => {
      this.loading = false;
      this.videos = videos;
      this.message = `Resultados de la busqueda: ${query}`;
      console.log(this.videos);
      if (this.videos.length === 0) {
        this.message = 'No se obtuvieron resultados';
      }
      this.selectedVideo = this.videos[0];
    }, error => {
      console.log(error.message);
      this.loading = false;
      this.message = 'Ocurrió un error en la busqueda';
    });
  }

  watchVideo(id: string) {
    this.selectedVideo = this.videos.find(video => video.id === id);
  }
}
