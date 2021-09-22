import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: MainPage,
    children:[
      {
        path:'hoursweek',
        loadChildren: () => import('../hours-week/hours-week.module').then(m=>m.HoursWeekPageModule)
      },
      {
        path:'mydata',
        loadChildren: () => import('../mydata/mydata.module').then(m=>m.MydataPageModule)
      },
      {
        path:'location',
        loadChildren: () => import('../location/location.module').then(m=>m.LocationPageModule)
      },
      {
        path:'about',
        loadChildren: () => import('../about/about.module').then(m=>m.AboutPageModule)
      },
      {
        path:'',
        redirectTo:'about',
        pathMatch:'full'
      }
    ]
  },

  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
