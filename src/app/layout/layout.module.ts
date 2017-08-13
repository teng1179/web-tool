import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent } from '../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  imports: [
    NgbModule.forRoot(),
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [LayoutComponent,HeaderComponent, SidebarComponent]
})
export class LayoutModule { }
