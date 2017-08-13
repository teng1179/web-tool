import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MapTransRoutingModule } from './map-trans-routing.module';
import { MapTransComponent } from './map-trans.component';
import { FormsModule } from '@angular/forms';
import { DownloadTableToCsvDirective } from '../../shared/download-table-to-csv.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    NgbModule.forRoot(),
    CommonModule,
    MapTransRoutingModule,
    FormsModule
  ],
  declarations: [
    MapTransComponent,
    DownloadTableToCsvDirective
  ]
})
export class MapTransModule { }
