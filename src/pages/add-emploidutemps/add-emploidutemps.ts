import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';
import { GlobalProvider } from '../../providers/global/global';
import { HomePage } from '../home/home';

/**
 * Generated class for the AddEmploidutempsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-emploidutemps',
  templateUrl: 'add-emploidutemps.html',
})
export class AddEmploidutempsPage {

 // myphoto:any;
 // defaultPhotoPath:string="assets/imgs/placeholder_home.jpg";
 // imgPath=this.defaultPhotoPath;
	public formAddEmploidutemps: FormGroup;
  constructor( public http:Http, public alertCtrl:AlertController ,public global:GlobalProvider ,
    public loadingCtrl:LoadingController ,
     public toastCtrl: ToastController,
      public formBuilder:FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    var validators={
      "name":[Validators.required,Validators.pattern("[A-Za-z\s]{2,50}")],
      "dob":[Validators.required],
      
    };
    this.formAddEmploidutemps=this.formBuilder.group({
      //  classe: ['',validators.name],
      //  surname: ['',validators.name],
      classe: ['',validators.dob], 
      matiere: ['',validators.dob], 
      periode: ['',validators.dob], 
      jour: ['',validators.dob],   
    });
  }
  emploi={
    classe: '', 
    matiere: '', 
    periode: '', 
    jour: '',  
	};

	ionViewDidLoad() {
		console.log('ionViewDidLoad AddPupilPage');
	}

  returnHome(){
      this.navCtrl.setRoot(HomePage);
  }

  save() {
    if(this.formAddEmploidutemps.valid ){
      let loader = this.loadingCtrl.create({
        content: "Ajout de l'emploi du temps...",
        spinner:"bubbles"
      });
      loader.present();
      let postData:any;
      postData=this.formAddEmploidutemps.value;

      this.http.post(this.global.serverAddress+"api/add_pupil.php", JSON.stringify(postData))
        .subscribe(data => {
          loader.dismiss();
          console.log(data["_body"]);
          let response = JSON.parse(data["_body"]);
          if(response.response=="success"){
            
           // this.uploadImage(response.accountno);
           let toast = this.toastCtrl.create({
            message: 'Ajout éffectué avec succès!',
            duration: 3000,
            position: 'bottom',
            cssClass: 'dark-trans',
            closeButtonText: 'OK',
            showCloseButton: true
          });
          toast.present();
            this.navCtrl.pop();
          }else{
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
        }, error => {
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
        }
      );
    }else{
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
