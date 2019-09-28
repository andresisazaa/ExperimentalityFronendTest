import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Video } from 'src/app/models/video.model';

@Component({
  selector: 'app-video-slider',
  templateUrl: './video-slider.component.html',
  styleUrls: ['./video-slider.component.scss']
})
export class VideoSliderComponent {
  @Input() videos: Video[];
  @Output() selectedVideo = new EventEmitter<string>();
  constructor() { }

  selectVideo(id: string) {
    this.selectedVideo.emit(id);
  }

}
