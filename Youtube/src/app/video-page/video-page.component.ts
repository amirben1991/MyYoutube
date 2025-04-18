import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html'
})
export class VideoPageComponent implements OnInit {
  video: any;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.video = {
        title: params['title']
      };
    });
  }

  constructor(private route: ActivatedRoute) {}
}
