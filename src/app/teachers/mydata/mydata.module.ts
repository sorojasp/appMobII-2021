import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MydataPageRoutingModule } from './mydata-routing.module';

import { MydataPage } from './mydata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MydataPageRoutingModule
  ],
  declarations: [MydataPage]
})
export class MydataPageModule {}
