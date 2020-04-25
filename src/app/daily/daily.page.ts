import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { WeatherService } from 'src/app/services/weather.service';
import { Utils } from 'src/app/helpers/utils';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.page.html',
  styleUrls: ['./daily.page.scss'],
})
export class DailyPage implements OnInit {

  data: any = {}
  list = [];

  readonly epochToJsDate = Utils.epochToJsDate;
  readonly getIcon = Utils.getIcon;

  constructor(
    private weatherService: WeatherService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.load().then(() => {});
  }

  async load() {
    this.weatherService.getDetails().subscribe((res: any) => {
      this.data = res;
      this.list = res.daily;
    },
    (error: HttpErrorResponse) => {
      Utils.showToast('Error ' + error.message, this.toastController);
    });
  }

  async refresh(event) {
    await this.load();
    event.target.complete();
  }
}
