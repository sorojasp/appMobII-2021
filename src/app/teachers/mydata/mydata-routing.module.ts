import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MydataPage } from './mydata.page';

const routes: Routes = [
  {
    path: '',
    component: MydataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MydataPageRoutingModule {}
