import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GlobalProvider } from '../../providers/global/global';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the AddNotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-notification',
  templateUrl: 'add-notification.html',
})
export class AddNotificationPage {
  public formAddNotification: FormGroup;
  m: string = 'notifications/add';
  notification = {
    ID: '',
    contenu: '',
    date_notif:undefined
    
  };
  matiere: any;
  constructor( public alertCtrl: AlertController, public global: GlobalProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private apiProvider: ApiProvider,
    public formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
   
    var validators = {
      "name": [Validators.required, Validators.pattern("[A-Za-z\s]{2,50}")],
      "dob": [Validators.required],
    };
    this.formAddNotification = this.formBuilder.group({
      contenu: ['', validators.dob],
    });
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPupilPage');
  }

  presentTost(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      cssClass: 'dark-trans',
      closeButtonText: 'OK',
      showCloseButton: true
    });
    toast.present();
  }

  save() {
    if (this.formAddNotification.valid) {
      let loader = this.loadingCtrl.create({
        content: "Envoie de la notification...",
        spinner: "bubbles"
      });
      loader.present();
      let postData: any;
      postData = this.notification;
      console.info('DEPART')
      console.log(postData);
      this.apiProvider.saveRequest(JSON.stringify(postData), this.m).subscribe(data => {
        loader.dismiss();
          console.info('RETOUR')
          console.log(data["_body"]);
          let response = JSON.parse(data["_body"]);
          if (response.status == "ok") {
            this.presentTost(response.message);
            
            this.navCtrl.pop();
          } else {
            loader.dismiss();
            let toast = this.toastCtrl.create({
              message: 'Un problème est survenu!',
              duration: 3000,
              position: 'bottom',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
      }, err => {
        console.info('ERREUR')
          console.log(err);
          loader.dismiss();
          let toast = this.toastCtrl.create({
            message: 'Resolve Connectivity Issue!',
            duration: 3000,
            position: 'bottom',
            cssClass: 'dark-trans',
            closeButtonText: 'OK',
            showCloseButton: true
          });
          toast.present();
      });
    } else {
      let toast = this.toastCtrl.create({
        message: 'Tous les champs ne sont pas rempli!',
        duration: 3000,
        position: 'bottom',
        cssClass: 'dark-trans',
        closeButtonText: 'OK',
        showCloseButton: true
      });
      toast.present();
    }
  }

}
