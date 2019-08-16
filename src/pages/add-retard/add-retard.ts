import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GlobalProvider } from '../../providers/global/global';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the AddRetardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-retard',
  templateUrl: 'add-retard.html',
})
export class AddRetardPage {
  public formAddRetard: FormGroup;
  m: string = 'retards/add';
  mperiode: string = 'periodes/'
  eleve: any={};
  retard = {
    ID: '',
    IDELEVE: undefined,
    IDPERIODE: '',
    HEUREARRIVE: '',
    DATERETARD: '',
  };
  periodes: any;
  constructor(public alertCtrl: AlertController, public global: GlobalProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private apiProvider: ApiProvider,
    public formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.eleve = this.navParams.get("eleve");
    this.retard.IDELEVE=this.eleve.id;
    var validators = {
      "name": [Validators.required, Validators.pattern("[A-Za-z\s]{2,50}")],
      "dob": [Validators.required],

    };
    this.formAddRetard = this.formBuilder.group({
      //  classe: ['',validators.name],
      time: ['',validators.dob],
      periode: ['', validators.dob],
      date: ['', validators.dob],
    });
  }
 

  ionViewDidLoad() {
    this.getPeriodes();
    console.log('ionViewDidLoad AddRetardPage');
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
    if (this.formAddRetard.valid) {
      let loader = this.loadingCtrl.create({
        content: "Ajout du retard...",
        spinner: "bubbles"
      });
      loader.present();
      let postData: any;
      postData = this.retard;
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
          //console.log(err);
          console.log(err["_body"]);
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
  getPeriodes() {
    this.apiProvider.getRequest2(this.mperiode+"all").subscribe(data => {
      console.log(data);
      this.periodes = JSON.parse(data["_body"]);
    }, err => {
      console.log(err);
    });
  }

}
