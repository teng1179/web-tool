import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapTransComponent } from './map-trans.component';

const routes: Routes = [
  { path: '', component: MapTransComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapTransRoutingModule { }
