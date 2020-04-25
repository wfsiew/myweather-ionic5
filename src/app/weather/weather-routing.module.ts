import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherPage } from './weather.page';

const routes: Routes = [
  {
    path: 'weather',
    component: WeatherPage,
    children: [
      {
        path: 'current',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'hourly',
        children: [
          {
            path: '',
            loadChildren: () => import('../hourly/hourly.module').then(m => m.HourlyPageModule)
          }
        ]
      },
      {
        path: 'daily',
        children: [
          {
            path: '',
            loadChildren: () => import('../daily/daily.module').then(m => m.DailyPageModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/weather/current',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherPageRoutingModule {}
