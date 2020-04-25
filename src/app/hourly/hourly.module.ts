import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HourlyPageRoutingModule } from './hourly-routing.module';

import { HourlyPage } from './hourly.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HourlyPageRoutingModule
  ],
  declarations: [HourlyPage]
})
export class HourlyPageModule {}
