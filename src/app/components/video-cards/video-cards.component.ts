import { Component, OnInit } from '@angular/core';
import { VideoService, iVideos } from '../../services/videos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-video-cards',
  templateUrl: './video-cards.component.html',
  styleUrls: ['./video-cards.component.css']
})
export class VideoCardsComponent implements OnInit {

  videos: iVideos[] = [];
  // tslint:disable-next-line: variable-name
  constructor( private _videoService: VideoService, private router:Router) {
    console.log('constructor');
   }

  ngOnInit() {
    console.log('ngOnInit');
    this.videos = this._videoService.getVideos();
    console.log(this.videos);
  }

  navigate(video) {
    this.router.navigate(['video', video.index]);
  }
}
