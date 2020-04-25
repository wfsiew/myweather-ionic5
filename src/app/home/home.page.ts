import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { WeatherService } from 'src/app/services/weather.service';
import { Utils } from 'src/app/helpers/utils';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  data: any = {}
  current: any = {
    weather: []
  }

  readonly epochToJsDate = Utils.epochToJsDate;
  readonly getIcon = Utils.getIcon;

  constructor(
    private weatherService: WeatherService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.load().then(() => {});
  }

  async load() {
    this.weatherService.getDetails().subscribe((res: any) => {
      this.data = res;
      this.current = res.current;
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
