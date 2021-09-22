import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoursWeekPageRoutingModule } from './hours-week-routing.module';

import { HoursWeekPage } from './hours-week.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoursWeekPageRoutingModule
  ],
  declarations: [HoursWeekPage]
})
export class HoursWeekPageModule {}
