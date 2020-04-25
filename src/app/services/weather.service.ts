import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  baseurl = 'https://api.openweathermap.org/data/2.5/onecall';

  constructor(
    public http: HttpClient
  ) { }

  getDetails() {
    let prm: HttpParams = new HttpParams()
      .set('lat', 3.030112.toString())
      .set('lon', 101.668607.toString())
      .set('units', 'metric')
      .set('appid', 'a7ad7659347f6a1abad3fb1dd2c0b30d');
    let res = this.http.get(this.baseurl, { params: prm });
    return res;
  }
}
