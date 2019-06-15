
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { API_VIEOS } from '../constants/grid-parameters.constant';
import { VideoItem } from '../models/video-item.model';
import {Injectable} from "@angular/core";

@Injectable()
export class GetVideosService {

  constructor(
        private http: HttpClient,
  ) { }

  getVideos() {
    return this.http.get(API_VIEOS).pipe(
      map((response: any) =>  {
        const { items } = response;
        return items.map(item =>
          new VideoItem(
            item.id.videoId, item.snippet.thumbnails.medium.url,
            item.snippet.publishedAt,
            item.snippet.title,
            item.snippet.description
        ));
      })
    )
  }
}
