import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ItemSliding, ToastController, LoadingController } from 'ionic-angular';
import { AddEmploidutempsPage } from '../add-emploidutemps/add-emploidutemps';
import { GlobalProvider } from '../../providers/global/global';
import { ViewEmploidutempsPage } from '../view-emploidutemps/view-emploidutemps';
import { Http } from '@angular/http';

/**
 * Generated class for the EmploiedutempsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-emploiedutemps',
	templateUrl: 'emploiedutemps.html',
})
export class EmploiedutempsPage {

	emploidutemps = [];
	public total: number = 0;
	public filterType: string;
	//m:string = "api/emploidutemps/list.php";
	m: string = "emploidutemps/all";
	//mdelete:string = "api/emploidutemps/delete.php"
	constructor(public toastCtrl: ToastController,
		public alertCtrl: AlertController,
		public global: GlobalProvider,
		public navCtrl: NavController,
		public loadingCtrl: LoadingController, public navParams: NavParams, public http: Http) {
		if (this.global.session == null) {
			this.navCtrl.pop();
		}
	}

	profile(item: ItemSliding, id: string) {
		this.navCtrl.push(ViewEmploidutempsPage, { "id": id });
		item.close();
	}

	delete(item: ItemSliding, id: string) {
		let p = '?id=' + id + "&delete";
		this.http.get(this.global.serverAddress + this.m + p)
			.subscribe(data => {
				let resp = JSON.parse(data["_body"]);
				if (resp.response == "success") {
					let toast = this.toastCtrl.create({
						message: 'Emploidutemps successfully deleted!',
						duration: 3000,
						position: 'bottom',
						cssClass: 'dark-trans',
						closeButtonText: 'OK',
						showCloseButton: true
					});
					toast.present();
					this.initialiseEmploidutempss();
				} else {
					let toast = this.toastCtrl.create({
						message: 'Emploidutemps could not be deleted!',
						duration: 3000,
						position: 'bottom',
						cssClass: 'dark-trans',
						closeButtonText: 'OK',
						showCloseButton: true
					});
					toast.present();
				}
			}, error => {
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
		item.close();
	}

	filterEmploidutempss(ev: any) {
		this.http.get(this.global.serverAddress + this.m)
			.subscribe(data => {
				this.emploidutemps = JSON.parse(data["_body"]);
				let val = ev.target.value;
				if (val && val.trim() !== '') {
					this.emploidutemps = this.emploidutemps.filter((data) => {
						return ((data.fldfirstname.toLowerCase().indexOf(val.toLowerCase()) > -1));
					})
				}
				this.getTotal();
			}, error => {
				console.log("failed");
			}
			);
	}

	isNetwork(network: any, phone: string) {
		for (var i = 0; i < network.length; i++) {
			if (network[i].indexOf(phone.substr(0, 2)) > -1) {
				return true;
			}
		}
		return false;
	}

	ionViewDidEnter() {
		this.initialiseEmploidutempss();
	}

	initialiseEmploidutempss() {
		this.http.get(this.global.serverAddress + this.m)
			.subscribe(data => {
				console.log(data);
				//return null;
				this.emploidutemps = JSON.parse(data["_body"]);
				console.log(this.emploidutemps);
				this.getTotal();
			}, error => {
				console.log("failed");
			}
			);
	}

	showAddEmploidutemps() {
		this.navCtrl.push(AddEmploidutempsPage);
	}

	getTotal() {
		this.total = this.emploidutemps.length;
	}
}
