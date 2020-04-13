import { Component } from '@angular/core';
import { IonicPage , NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { HomePage } from '../home/home';

/**
 * Generated class for the TermsAndConditionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-terms-and-conditions',
  templateUrl: 'terms-and-conditions.html',
  providers: [ApiProvider]
})
export class TermsAndConditionsPage {

  terms = []
  acceptanceCheckbox : boolean = false ;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController,
    public loadingCtrl: LoadingController, public apiProvider: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsPage');
    let loading = this.loadingCtrl.create({
      spinner: "bubbles"
    });

    loading.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    loading.present();
    console.log('before');
    this.apiProvider.terms().subscribe(data => {
    console.log('in api');

      console.log('data' , data)
      if(data['STATUS'] == 1)
      this.terms = data['TERMS'];
      console.log(data);
      loading.dismiss();
    });
  }

  // Go to home page after accept terms
  goToHomePage = () => {
    this.navCtrl.setRoot(HomePage);
  }

  openMenu(){
    this.menu.open();
  }

}
