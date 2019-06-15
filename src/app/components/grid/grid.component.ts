import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { COLUMN_PARAMETERS, STATUS_BAR_PARAMETERS } from './constants/grid-parameters.constant';
import { GetVideosService } from './services/get-videos.service';
import { VideoItem } from './models/video-item.model';
import {ImageRendererComponent} from "../image-renderer/image-renderer.component";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  columnDefs = COLUMN_PARAMETERS;
  rowData: VideoItem[];
  gridApi: any;
  statusBar: any;

  private frameworkComponents;

  constructor(
    private http: HttpClient,
    private getVideosService: GetVideosService,
  ) {}

  ngOnInit() {
    this.statusBar = STATUS_BAR_PARAMETERS;

    this.frameworkComponents = {
      imageRenderer: ImageRendererComponent,
    };

    this.getVideosService.getVideos().subscribe(
      (videoItems: VideoItem[]) => this.rowData = videoItems
    )
  }


  onGridReady(params) {
    this.gridApi = params.api;
    // this.gridColumnApi = params.columnApi;

    this.gridApi.sizeColumnsToFit();
  }
}
