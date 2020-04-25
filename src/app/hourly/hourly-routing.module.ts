import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HourlyPage } from './hourly.page';

const routes: Routes = [
  {
    path: '',
    component: HourlyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HourlyPageRoutingModule {}
