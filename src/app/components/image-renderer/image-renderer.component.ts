import { Component } from '@angular/core';

import { ICellRendererAngularComp } from "ag-grid-angular";

@Component({
  selector: 'square-cell',
  template: `<img src="{{getImageSrc()}}"/>`
})
export class ImageRendererComponent implements ICellRendererAngularComp {
  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

  public getImageSrc(): number {
    return this.params.value
  }

  refresh(): boolean {
    return false;
  }
}
