import { LoadingController, ToastController } from '@ionic/angular';

export class Utils {

  static async dismissLoading(loading: HTMLIonLoadingElement) {
    const { role, data } = await loading.onDidDismiss();
  }

  static async showToast(msg: string, k: ToastController) {
    const toast = await k.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  static epochToJsDate(ts) {
    var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let dt = new Date(ts * 1000);
    let min = `0${dt.getMinutes()}`;
    min = min.substr(-2);
    let sec = `0${dt.getSeconds()}`;
    sec = sec.substr(-2);
    let s = `${dt.getDate()} ${months_arr[dt.getMonth()]} ${dt.getFullYear()} ${dt.getHours()}:${min}:${sec}`;
    return s;
  }

  static getIcon(s) {
    return `https://openweathermap.org/img/wn/${s}@2x.png`;
  }
}