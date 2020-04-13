import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';

/**
 * Generated class for the ResponsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-respons',
  templateUrl: 'respons.html',
})
export class ResponsPage {

  respons = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController,
    public loadingCtrl: LoadingController, public apiProvider: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResponsPage');
    let loading = this.loadingCtrl.create({
      spinner: "bubbles"
    });

    loading.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    loading.present();
    this.apiProvider.respons().subscribe(data => {
      if (data['STATUS'] == 1)
        this.respons = data['RESPONS'];
      console.log(data);
      loading.dismiss();
    });
  }

  openMenu() {
    this.menu.open();
  }

}
