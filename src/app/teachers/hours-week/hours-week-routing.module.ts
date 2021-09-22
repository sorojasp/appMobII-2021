import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoursWeekPage } from './hours-week.page';

const routes: Routes = [
  {
    path: '',
    component: HoursWeekPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoursWeekPageRoutingModule {}
