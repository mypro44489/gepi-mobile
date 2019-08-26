import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GlobalProvider } from '../../providers/global/global';
import { ApiProvider } from '../../providers/api/api';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AddNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage {

  public formAddNote: FormGroup;
  m: string = 'notes/add';
  mperiode: string = 'periodes/'
  eleve: any={};
  occasions:any = ['interrogation', 'devoir', 'examen'];
  note = {
    ID: '',
    IDELEVE: undefined,
    IDMATIERE: undefined,
    VALEURNOTESNOTES: '',
    DATENOTES: '',
    occasion:'',
  };
  matiere: any;
  constructor( public storage: Storage, public alertCtrl: AlertController, public global: GlobalProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private apiProvider: ApiProvider,
    public formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.eleve = this.navParams.get("eleve");
    this.note.IDELEVE=this.eleve.id;
   
    var validators = {
      "name": [Validators.required, Validators.pattern("[A-Za-z\s]{2,50}")],
      "dob": [Validators.required],

    };
    this.formAddNote = this.formBuilder.group({
      //  classe: ['',validators.name],
      occasion: ['',validators.dob],
      note: ['', validators.dob],
      date: ['', validators.dob],
    });
  }
 

  ionViewDidLoad() {
   // this.getPeriodes();
   this.storage.get('choixMatiere').then((val) =>{
    this.matiere = val;
    this.note.IDMATIERE = this.matiere.ID;
  });
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
    if (this.formAddNote.valid) {
      let loader = this.loadingCtrl.create({
        content: "Enrégistrement de la note...",
        spinner: "bubbles"
      });
      loader.present();
      let postData: any;
      postData = this.note;
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
  // getPeriodes() {
  //   this.apiProvider.getRequest2(this.mperiode+"all").subscribe(data => {
  //     console.log(data);
  //     this.periodes = JSON.parse(data["_body"]);
  //   }, err => {
  //     console.log(err);
  //   });
  // }

}
