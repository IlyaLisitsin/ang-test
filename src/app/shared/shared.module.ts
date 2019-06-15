import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageContainerComponent } from './components/page-container/page-container.component';

const COMPONENTS = [
  PageContainerComponent
];

@NgModule({
  declarations: [
    PageContainerComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageContainerComponent
  ]
})
export class SharedModule { }
