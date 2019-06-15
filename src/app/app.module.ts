import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'ag-grid-enterprise'

import { AppComponent } from './app.component';
import { GridModule } from './components/grid/grid.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    GridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
