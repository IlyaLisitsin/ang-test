import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GridComponent } from './grid.component'

import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { GetVideosService } from './services/get-videos.service';
import { ImageRendererComponent } from "../image-renderer/image-renderer.component";

@NgModule({
  declarations: [
    GridComponent,
    ImageRendererComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([ImageRendererComponent]),
    HttpClientModule
  ],
  exports: [
    GridComponent
  ],
  providers: [
    GetVideosService,
  ],
})

export class GridModule {}
