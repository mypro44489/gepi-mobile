webpackJsonp([24],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbscencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_abscence_add_abscence__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__choix_eleve_choix_eleve__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__choix_classe_choix_classe__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the AbscencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AbscencePage = /** @class */ (function () {
    //host="http://localhost/gepi-mobile-api/api/web/v1/";
    function AbscencePage(alertCtrl, apiProvider, navCtrl, navParams, global, toastCtrl, http) {
        this.alertCtrl = alertCtrl;
        this.apiProvider = apiProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.global = global;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.abscences = [];
        this.m = "abscences/";
    }
    AbscencePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AbscencePage');
    };
    AbscencePage.prototype.getAbscences = function () {
        var _this = this;
        this.apiProvider.getRequest2(this.m + "all").subscribe(function (data) {
            console.log(data);
            _this.abscences = JSON.parse(data["_body"]);
        }, function (err) {
            console.log(err);
        });
    };
    AbscencePage.prototype.ionViewWillEnter = function () {
        this.getAbscences();
    };
    AbscencePage.prototype.getItems = function (ev) {
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.abscences = this.abscences.filter(function (item) {
                return (item.nif.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.getAbscences();
        }
    };
    AbscencePage.prototype.presentTost = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            cssClass: 'dark-trans',
            closeButtonText: 'OK',
            showCloseButton: true
        });
        toast.present();
    };
    AbscencePage.prototype.deleteObject = function (obj) {
        var _this = this;
        this.apiProvider.deleteRequestById(this.m, obj.ID).subscribe(function (data) {
            console.log(data);
            _this.presentTost('Suppression d\'une Absence effctuées');
            _this.removeLigne(obj);
        }, function (err) {
            console.log(err);
        });
    };
    AbscencePage.prototype.removeLigne = function (obj) {
        var index = this.abscences.indexOf(obj);
        if (index > -1) {
            this.abscences.splice(index, 1);
        }
    };
    AbscencePage.prototype.supprConfirm = function (obj) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Supprimer',
            message: 'Voulez vous vraiment supprimer cet absence?',
            buttons: [
                {
                    text: 'Non',
                    handler: function () {
                        console.log('Desagree clicked');
                    }
                },
                {
                    text: 'Oui',
                    handler: function () {
                        _this.deleteObject(obj);
                    }
                }
            ]
        });
        confirm.present();
    };
    AbscencePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getAbscences();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    AbscencePage.prototype.ajouter = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__choix_classe_choix_classe__["a" /* ChoixClassePage */], { "page1": __WEBPACK_IMPORTED_MODULE_5__choix_eleve_choix_eleve__["a" /* ChoixElevePage */], "page": __WEBPACK_IMPORTED_MODULE_4__add_abscence_add_abscence__["a" /* AddAbscencePage */] });
    };
    AbscencePage.prototype.modifier = function (obj) {
        console.log(obj);
        //this.navCtrl.push(UpdateAbscencesPage, { "obj": obj });
    };
    AbscencePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-abscence',template:/*ion-inline-start:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\abscence\abscence.html"*/'<ion-header>\n  <ion-navbar no-border-bottom color="otr">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Absences\n    </ion-title>\n  </ion-navbar>\n  <!-- <ion-searchbar (ionInput)="getItems($event)" placeholder="Recherche par heure"></ion-searchbar> -->\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <ion-item *ngFor="let obj of abscences">\n      <!-- <ion-icon name="person"></ion-icon>  {{ obj.DATEABSENCE }} {{ obj.HEUREPERIODE }} - absent\n      <button  (click)="modifier(obj)" color="otr" ion-button outline item-end icon-start>\n        <ion-icon name="create"></ion-icon>\n      </button> \n      <button (click)="supprConfirm(obj)" color="danger" ion-button outline item-end icon-start>\n        <ion-icon name="trash"></ion-icon>\n      </button> -->\n      <ion-icon name="person" slot="start"></ion-icon>\n      {{obj.nom}} {{obj.prenoms}}\n      <div class="item-note" slot="end">\n        abscent le {{ obj.DATEABSENCE}} <br>\n        à la {{ obj.HEUREPERIODE }}\n      </div>\n      <button *ngIf="global.accessLevel==\'Administrateur\' || global.accessLevel==\'Professeur\'" (click)="supprConfirm(obj)" color="danger" ion-button outline item-end icon-start>\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-item>\n\n  </ion-list>\n\n  <div *ngIf="abscences.length ==0" class="notrouve">\n    aucune absence!\n  </div>\n\n  <ion-fab *ngIf="global.accessLevel==\'Administrateur\' || global.accessLevel==\'Professeur\'" right bottom (tap)="ajouter()">\n    <button ion-fab color="otr">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\abscence\abscence.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], AbscencePage);
    return AbscencePage;
}());

//# sourceMappingURL=abscence.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAbscencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AddAbscencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddAbscencePage = /** @class */ (function () {
    function AddAbscencePage(http, alertCtrl, global, loadingCtrl, toastCtrl, apiProvider, formBuilder, navCtrl, navParams) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.global = global;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.apiProvider = apiProvider;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.m = 'abscences/add';
        this.mperiode = 'periodes/';
        this.eleve = {};
        this.abscence = {
            ID: '',
            IDELEVE: undefined,
            IDPERIODE: '',
            DATEABSENCE: '',
        };
        this.eleve = this.navParams.get("eleve");
        this.abscence.IDELEVE = this.eleve.id;
        var validators = {
            "name": [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern("[A-Za-z\s]{2,50}")],
            "dob": [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        };
        this.formAddAbscence = this.formBuilder.group({
            //  classe: ['',validators.name],
            //  surname: ['',validators.name],
            periode: ['', validators.dob],
            date: ['', validators.dob],
        });
    }
    AddAbscencePage.prototype.ionViewDidLoad = function () {
        this.getPeriodes();
        console.log('ionViewDidLoad AddPupilPage');
    };
    AddAbscencePage.prototype.presentTost = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            cssClass: 'dark-trans',
            closeButtonText: 'OK',
            showCloseButton: true
        });
        toast.present();
    };
    AddAbscencePage.prototype.save = function () {
        var _this = this;
        if (this.formAddAbscence.valid) {
            var loader_1 = this.loadingCtrl.create({
                content: "Ajout de l'absence...",
                spinner: "bubbles"
            });
            loader_1.present();
            var postData = void 0;
            postData = this.abscence;
            console.info('DEPART');
            console.log(postData);
            this.apiProvider.saveRequest(JSON.stringify(postData), this.m).subscribe(function (data) {
                loader_1.dismiss();
                console.info('RETOUR');
                console.log(data["_body"]);
                var response = JSON.parse(data["_body"]);
                if (response.status == "ok") {
                    _this.presentTost('Ajout éffectué avec succès!');
                    _this.navCtrl.pop();
                }
                else {
                    loader_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: 'Un problème est survenu!',
                        duration: 3000,
                        position: 'bottom',
                        cssClass: 'dark-trans',
                        closeButtonText: 'OK',
                        showCloseButton: true
                    });
                    toast.present();
                }
            }, function (err) {
                console.info('ERREUR');
                console.log(err);
                loader_1.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Resolve Connectivity Issue!',
                    duration: 3000,
                    position: 'bottom',
                    cssClass: 'dark-trans',
                    closeButtonText: 'OK',
                    showCloseButton: true
                });
                toast.present();
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Tous les champs ne sont pas rempli!',
                duration: 3000,
                position: 'bottom',
                cssClass: 'dark-trans',
                closeButtonText: 'OK',
                showCloseButton: true
            });
            toast.present();
        }
    };
    AddAbscencePage.prototype.getPeriodes = function () {
        var _this = this;
        this.apiProvider.getRequest2(this.mperiode + "all").subscribe(function (data) {
            console.log(data);
            _this.periodes = JSON.parse(data["_body"]);
        }, function (err) {
            console.log(err);
        });
    };
    AddAbscencePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-abscence',template:/*ion-inline-start:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\add-abscence\add-abscence.html"*/'<!--\n  Generated template for the AddContribuablePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="otr">\n    <ion-title>Enrégistrer l\'absent</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="save()" [formGroup]="formAddAbscence">\n    <ion-list padding>\n      <ion-card>\n\n        <ion-card-header>\n          Eleve\n        </ion-card-header>\n\n        <ion-card-content>\n          {{ eleve.nom }} {{ eleve.prenoms }}: {{ eleve.classe }}\n        </ion-card-content>\n\n      </ion-card>\n     \n      <ion-item>\n        <ion-label floating>Heure</ion-label>\n        <ion-select  formControlName="periode" [(ngModel)]="abscence.IDPERIODE">\n          <ion-option *ngFor="let obj2 of periodes" [value]="obj2.ID">{{obj2.HEUREPERIODE}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Date absence</ion-label>\n        <ion-input formControlName="date" [(ngModel)]="abscence.DATEABSENCE" type="date"></ion-input>\n      </ion-item>\n\n    </ion-list>\n    <div padding>\n      <button type="submit" ion-button color="otr" block>Enregistrer</button>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\add-abscence\add-abscence.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddAbscencePage);
    return AddAbscencePage;
}());

//# sourceMappingURL=add-abscence.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AddNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddNotePage = /** @class */ (function () {
    function AddNotePage(storage, alertCtrl, global, loadingCtrl, toastCtrl, apiProvider, formBuilder, navCtrl, navParams) {
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.global = global;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.apiProvider = apiProvider;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.m = 'notes/add';
        this.mperiode = 'periodes/';
        this.eleve = {};
        this.note = {
            ID: '',
            IDELEVE: undefined,
            IDMATIERE: undefined,
            VALEURNOTESNOTES: '',
            DATENOTES: '',
        };
        this.eleve = this.navParams.get("eleve");
        this.note.IDELEVE = this.eleve.id;
        var validators = {
            "name": [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern("[A-Za-z\s]{2,50}")],
            "dob": [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        };
        this.formAddNote = this.formBuilder.group({
            //  classe: ['',validators.name],
            //  surname: ['',validators.name],
            note: ['', validators.dob],
            date: ['', validators.dob],
        });
    }
    AddNotePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // this.getPeriodes();
        this.storage.get('choixMatiere').then(function (val) {
            _this.matiere = val;
            _this.note.IDMATIERE = _this.matiere.ID;
        });
        console.log('ionViewDidLoad AddPupilPage');
    };
    AddNotePage.prototype.presentTost = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            cssClass: 'dark-trans',
            closeButtonText: 'OK',
            showCloseButton: true
        });
        toast.present();
    };
    AddNotePage.prototype.save = function () {
        var _this = this;
        if (this.formAddNote.valid) {
            var loader_1 = this.loadingCtrl.create({
                content: "Enrégistrement de la note...",
                spinner: "bubbles"
            });
            loader_1.present();
            var postData = void 0;
            postData = this.note;
            console.info('DEPART');
            console.log(postData);
            this.apiProvider.saveRequest(JSON.stringify(postData), this.m).subscribe(function (data) {
                loader_1.dismiss();
                console.info('RETOUR');
                console.log(data["_body"]);
                var response = JSON.parse(data["_body"]);
                if (response.status == "ok") {
                    _this.presentTost(response.message);
                    _this.navCtrl.pop();
                }
                else {
                    loader_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: 'Un problème est survenu!',
                        duration: 3000,
                        position: 'bottom',
                        cssClass: 'dark-trans',
                        closeButtonText: 'OK',
                        showCloseButton: true
                    });
                    toast.present();
                }
            }, function (err) {
                console.info('ERREUR');
                console.log(err);
                loader_1.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Resolve Connectivity Issue!',
                    duration: 3000,
                    position: 'bottom',
                    cssClass: 'dark-trans',
                    closeButtonText: 'OK',
                    showCloseButton: true
                });
                toast.present();
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Tous les champs ne sont pas rempli!',
                duration: 3000,
                position: 'bottom',
                cssClass: 'dark-trans',
                closeButtonText: 'OK',
                showCloseButton: true
            });
            toast.present();
        }
    };
    AddNotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-note',template:/*ion-inline-start:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\add-note\add-note.html"*/'<!--\n  Generated template for the AddContribuablePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="otr">\n    <ion-title>Enrégistrer la note</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="save()" [formGroup]="formAddNote">\n    <ion-list padding>\n      <ion-card>\n\n        <ion-card-header>\n          Eleve\n        </ion-card-header>\n\n        <ion-card-content>\n          {{ eleve.nom }} {{ eleve.prenoms }}: {{ eleve.classe }} <br>\n          Matière : {{matiere?.LIBELLEMATIERE}}\n        </ion-card-content>\n\n      </ion-card>\n     \n      <ion-item>\n        <ion-label floating>Note</ion-label>\n        <ion-input formControlName="note" [(ngModel)]="note.VALEURNOTESNOTES" type="number"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Date note</ion-label>\n        <ion-input formControlName="date" [(ngModel)]="note.DATENOTES" type="date"></ion-input>\n      </ion-item>\n\n    </ion-list>\n    <div padding>\n      <button type="submit" ion-button color="otr" block>Enregistrer</button>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\add-note\add-note.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddNotePage);
    return AddNotePage;
}());

//# sourceMappingURL=add-note.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEmploidutempsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AddEmploidutempsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddEmploidutempsPage = /** @class */ (function () {
    function AddEmploidutempsPage(http, alertCtrl, global, loadingCtrl, toastCtrl, formBuilder, navCtrl, navParams) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.global = global;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emploi = {
            classe: '',
            matiere: '',
            periode: '',
            jour: '',
        };
        var validators = {
            "name": [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern("[A-Za-z\s]{2,50}")],
            "dob": [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        };
        this.formAddEmploidutemps = this.formBuilder.group({
            //  classe: ['',validators.name],
            //  surname: ['',validators.name],
            classe: ['', validators.dob],
            matiere: ['', validators.dob],
            periode: ['', validators.dob],
            jour: ['', validators.dob],
        });
    }
    AddEmploidutempsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPupilPage');
    };
    AddEmploidutempsPage.prototype.returnHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    AddEmploidutempsPage.prototype.save = function () {
        var _this = this;
        if (this.formAddEmploidutemps.valid) {
            var loader_1 = this.loadingCtrl.create({
                content: "Ajout de l'emploi du temps...",
                spinner: "bubbles"
            });
            loader_1.present();
            var postData = void 0;
            postData = this.formAddEmploidutemps.value;
            this.http.post(this.global.serverAddress + "api/add_pupil.php", JSON.stringify(postData))
                .subscribe(function (data) {
                loader_1.dismiss();
                console.log(data["_body"]);
                var response = JSON.parse(data["_body"]);
                if (response.response == "success") {
                    // this.uploadImage(response.accountno);
                    var toast = _this.toastCtrl.create({
                        message: 'Ajout éffectué avec succès!',
                        duration: 3000,
                        position: 'bottom',
                        cssClass: 'dark-trans',
                        closeButtonText: 'OK',
                        showCloseButton: true
                    });
                    toast.present();
                    _this.navCtrl.pop();
                }
                else {
                    loader_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: 'Un problème est survenu!',
                        duration: 3000,
                        position: 'bottom',
                        cssClass: 'dark-trans',
                        closeButtonText: 'OK',
                        showCloseButton: true
                    });
                    toast.present();
                }
            }, function (error) {
                loader_1.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Resolve Connectivity Issue!',
                    duration: 3000,
                    position: 'bottom',
                    cssClass: 'dark-trans',
                    closeButtonText: 'OK',
                    showCloseButton: true
                });
                toast.present();
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Tous les champs ne sont pas rempli!',
                duration: 3000,
                position: 'bottom',
                cssClass: 'dark-trans',
                closeButtonText: 'OK',
                showCloseButton: true
            });
            toast.present();
        }
    };
    AddEmploidutempsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-emploidutemps',template:/*ion-inline-start:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\add-emploidutemps\add-emploidutemps.html"*/'<!--\n  Generated template for the AddEmploidutempsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>add-emploidutemps</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form (ngSubmit)="save()" [formGroup]="formAddEmploidutemps">\n    <!-- <ion-card>\n      <ion-card-header>\n        Choisir la classe\n      </ion-card-header>\n\n      <ion-card-content>\n        {{ emploi?.classe.libelle }}\n      </ion-card-content>\n\n    </ion-card>\n    <ion-card (tap)="choisirMatiere()">\n\n      <ion-card-header>\n        Choisir la matière\n      </ion-card-header>\n\n      <ion-card-content>\n        {{ emploi?.matiere.libelle }}\n      </ion-card-content>\n\n    </ion-card> -->\n\n    <!-- <ion-card (tap)="choisirPeriode()">\n\n      <ion-card-header>\n        Choisir la période\n      </ion-card-header>\n\n      <ion-card-content>\n        {{ emploi?.periode.libelle }}\n      </ion-card-content>\n\n    </ion-card> -->\n\n    <ion-list padding class="list-form" style="margin-top:10px;margin-bottom: 10px">\n        <ion-item\n        style="padding:0px !important; border-bottom:none !important;border-top:none;font-size: 14px; margin-top:10px;background:none;border-bottom:1px solid white;box-shadow:none;">\n        <ion-label floating>Classe</ion-label>\n        <ion-select formControlName="classe" [(ngModel)]="emploi.classe">\n          <ion-option *ngFor="let obj of classes" value="obj.ID" >{{obj.LIBELLECLASSE}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item\n        style="padding:0px !important; border-bottom:none !important;border-top:none;font-size: 14px; margin-top:10px;background:none;border-bottom:1px solid white;box-shadow:none;">\n        <ion-label floating>Matière</ion-label>\n        <ion-select formControlName="matiere" [(ngModel)]="emploi.matiere">\n          <ion-option *ngFor="let obj1 of matieres" value="obj1.ID" >{{obj1.LIBELLEMATIERE}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item\n        style="padding:0px !important; border-bottom:none !important;border-top:none;font-size: 14px; margin-top:10px;background:none;border-bottom:1px solid white;box-shadow:none;">\n        <ion-label floating>Période</ion-label>\n        <ion-select formControlName="periode" [(ngModel)]="emploi.periode" >\n          <ion-option *ngFor="let obj2 of periodes" value="obj2.ID">{{obj2.HEUREPERIODE}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item\n        style="padding:0px !important; border-bottom:none !important;border-top:none;font-size: 14px; margin-top:10px;background:none;border-bottom:1px solid white;box-shadow:none;">\n        <ion-label floating>Jour</ion-label>\n        <ion-select formControlName="jour" [(ngModel)]="emploi.jour">\n          <ion-option value="Lundi">Lundi </ion-option>\n          <ion-option value="Mardi">Mardi </ion-option>\n          <ion-option value="Mercredi">Mercredi </ion-option>\n          <ion-option value="Jeudi">Jeudi </ion-option>\n          <ion-option value="Vendredi">Vendredi </ion-option>\n          <ion-option value="Samedi">Samedi </ion-option>\n          <ion-option value="Dimanche">Dimanche </ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item\n        style="padding:0px !important; border-bottom:none !important;border-top:none;font-size: 14px; margin-top:10px;background:none;border-bottom:1px solid white;box-shadow:none;">\n        <ion-label floating>Jour</ion-label>\n        <ion-input type="text" formControlName="jour"></ion-input>\n      </ion-item>\n      <!-- <ion-item style="padding:0px !important; border-bottom:none !important;border-top:none;font-size: 14px; margin-top:10px;background:none;border-bottom:1px solid white;box-shadow:none;">\n            <ion-label floating>Surname</ion-label>\n            <ion-input type="text" formControlName="surname"></ion-input>\n          </ion-item> -->\n\n      <!-- <ion-item\n        style="padding:0px !important; border-bottom:none !important;border-top:none;font-size: 14px; margin-top:10px;background:none;border-bottom:1px solid white;box-shadow:none;">\n        <ion-label floating>Date </ion-label>\n        <ion-input type="date" max="2019-01-01" formControlName="dob"></ion-input>\n      </ion-item> -->\n      <ion-item\n        style="padding:0px !important; border-bottom:none !important;border-top:none;font-size: 14px; margin-top:10px;background:none;border-bottom:1px solid white;box-shadow:none;">\n        <button icon-start block style="font-size: 14px;" color="primary" ion-button>\n          <ion-icon name=\'check\'></ion-icon>Enrégister\n        </button>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>'/*ion-inline-end:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\add-emploidutemps\add-emploidutemps.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddEmploidutempsPage);
    return AddEmploidutempsPage;
}());

//# sourceMappingURL=add-emploidutemps.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_notification_add_notification__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_notification_view_notification__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPage = /** @class */ (function () {
    //host="http://localhost/gepi-mobile-api/api/web/v1/";
    function NotificationPage(alertCtrl, apiProvider, navCtrl, navParams, global, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.apiProvider = apiProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.global = global;
        this.toastCtrl = toastCtrl;
        this.notifications = [];
        this.m = "notifications/";
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
    };
    NotificationPage.prototype.getNotifications = function () {
        var _this = this;
        this.apiProvider.getRequest2(this.m + "all").subscribe(function (data) {
            console.log(data);
            _this.notifications = JSON.parse(data["_body"]);
        }, function (err) {
            console.log(err);
        });
    };
    NotificationPage.prototype.detail = function (obj) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__view_notification_view_notification__["a" /* ViewNotificationPage */], { "notification": obj });
    };
    NotificationPage.prototype.ionViewWillEnter = function () {
        this.getNotifications();
    };
    NotificationPage.prototype.getItems = function (ev) {
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.notifications = this.notifications.filter(function (item) {
                return (item.contenu.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.getNotifications();
        }
    };
    NotificationPage.prototype.presentTost = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            cssClass: 'dark-trans',
            closeButtonText: 'OK',
            showCloseButton: true
        });
        toast.present();
    };
    NotificationPage.prototype.deleteObject = function (obj) {
        var _this = this;
        this.apiProvider.deleteRequestById(this.m, obj.ID).subscribe(function (data) {
            console.log(data);
            _this.presentTost('Suppression d\'une notification effctuées');
            _this.removeLigne(obj);
        }, function (err) {
            console.log(err);
        });
    };
    NotificationPage.prototype.removeLigne = function (obj) {
        var index = this.notifications.indexOf(obj);
        if (index > -1) {
            this.notifications.splice(index, 1);
        }
    };
    NotificationPage.prototype.supprConfirm = function (obj) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Supprimer',
            message: 'Voulez vous vraiment supprimer cette notification ?',
            buttons: [
                {
                    text: 'Non',
                    handler: function () {
                        console.log('Desagree clicked');
                    }
                },
                {
                    text: 'Oui',
                    handler: function () {
                        _this.deleteObject(obj);
                    }
                }
            ]
        });
        confirm.present();
    };
    NotificationPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getNotifications();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    NotificationPage.prototype.ajouter = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_notification_add_notification__["a" /* AddNotificationPage */]);
    };
    NotificationPage.prototype.modifier = function (obj) {
        console.log(obj);
        //this.navCtrl.push(UpdateNotificationsPage, { "obj": obj });
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\notification\notification.html"*/'<ion-header>\n  <ion-navbar no-border-bottom color="otr">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Notifications\n    </ion-title>\n  </ion-navbar>\n  <!-- <ion-searchbar (ionInput)="getItems($event)" placeholder="Recherche par heure"></ion-searchbar> -->\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <ion-item *ngFor="let obj of notifications">\n      <div (tap)="detail(obj)">\n          <ion-icon name="notifications" slot="start"></ion-icon>\n          {{obj.contenu}}\n      </div>\n    \n     \n      <button *ngIf="global.accessLevel==\'Administrateur\'" (click)="supprConfirm(obj)" color="danger" ion-button outline item-end icon-start>\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-item>\n\n  </ion-list>\n\n  <div *ngIf="notifications.length ==0" class="notrouve">\n    aucune notifications!\n  </div>\n\n  <ion-fab *ngIf="global.accessLevel==\'Administrateur\'" right bottom (tap)="ajouter()">\n    <button ion-fab color="otr">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\notification\notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AddNotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddNotificationPage = /** @class */ (function () {
    function AddNotificationPage(alertCtrl, global, loadingCtrl, toastCtrl, apiProvider, formBuilder, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.global = global;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.apiProvider = apiProvider;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.m = 'notifications/add';
        this.notification = {
            ID: '',
            contenu: '',
            date_notif: undefined
        };
        var validators = {
            "name": [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern("[A-Za-z\s]{2,50}")],
            "dob": [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        };
        this.formAddNotification = this.formBuilder.group({
            contenu: ['', validators.dob],
        });
    }
    AddNotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPupilPage');
    };
    AddNotificationPage.prototype.presentTost = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            cssClass: 'dark-trans',
            closeButtonText: 'OK',
            showCloseButton: true
        });
        toast.present();
    };
    AddNotificationPage.prototype.save = function () {
        var _this = this;
        if (this.formAddNotification.valid) {
            var loader_1 = this.loadingCtrl.create({
                content: "Envoie de la notification...",
                spinner: "bubbles"
            });
            loader_1.present();
            var postData = void 0;
            postData = this.notification;
            console.info('DEPART');
            console.log(postData);
            this.apiProvider.saveRequest(JSON.stringify(postData), this.m).subscribe(function (data) {
                loader_1.dismiss();
                console.info('RETOUR');
                console.log(data["_body"]);
                var response = JSON.parse(data["_body"]);
                if (response.status == "ok") {
                    _this.presentTost(response.message);
                    _this.navCtrl.pop();
                }
                else {
                    loader_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: 'Un problème est survenu!',
                        duration: 3000,
                        position: 'bottom',
                        cssClass: 'dark-trans',
                        closeButtonText: 'OK',
                        showCloseButton: true
                    });
                    toast.present();
                }
            }, function (err) {
                console.info('ERREUR');
                console.log(err);
                loader_1.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Resolve Connectivity Issue!',
                    duration: 3000,
                    position: 'bottom',
                    cssClass: 'dark-trans',
                    closeButtonText: 'OK',
                    showCloseButton: true
                });
                toast.present();
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Tous les champs ne sont pas rempli!',
                duration: 3000,
                position: 'bottom',
                cssClass: 'dark-trans',
                closeButtonText: 'OK',
                showCloseButton: true
            });
            toast.present();
        }
    };
    AddNotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-notification',template:/*ion-inline-start:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\add-notification\add-notification.html"*/'<!--\n  Generated template for the AddContribuablePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="otr">\n      <ion-title>Envoyé une notification</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <form (ngSubmit)="save()" [formGroup]="formAddNotification">\n      <ion-list >\n          \n        <ion-item>\n          <ion-textarea class="champ" formControlName="contenu" [(ngModel)]="notification.contenu" rows="6" cols="20" placeholder="Contenu"></ion-textarea>\n        </ion-item>\n       \n  \n      </ion-list>\n      <div padding>\n        <button type="submit" ion-button color="otr" block> <ion-icon name="send"></ion-icon> Envoyé</button>\n      </div>\n    </form>\n  </ion-content>'/*ion-inline-end:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\add-notification\add-notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddNotificationPage);
    return AddNotificationPage;
}());

//# sourceMappingURL=add-notification.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewNotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ViewNotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewNotificationPage = /** @class */ (function () {
    function ViewNotificationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.notification = this.navParams.get("notification");
    }
    ViewNotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewNotificationPage');
    };
    ViewNotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-notification',template:/*ion-inline-start:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\view-notification\view-notification.html"*/'<!--\n  Generated template for the ViewNotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Notification</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card class="arrondie">\n\n    <ion-item class="poster">\n      <ion-icon name="contact"></ion-icon> Admin <span class="date">publié le {{notification.date_notif}}</span>\n    </ion-item>\n\n    <ion-card-content>\n      <p class="contenu">\n        {{notification.contenu}}\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\view-notification\view-notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ViewNotificationPage);
    return ViewNotificationPage;
}());

//# sourceMappingURL=view-notification.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choix_matiere_choix_matiere__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the NotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotePage = /** @class */ (function () {
    //host="http://localhost/gepi-mobile-api/api/web/v1/";
    function NotePage(alertCtrl, apiProvider, navCtrl, navParams, global, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.apiProvider = apiProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.global = global;
        this.toastCtrl = toastCtrl;
        this.notes = [];
        this.m = "notes/";
    }
    NotePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotePage');
    };
    NotePage.prototype.getNotes = function () {
        var _this = this;
        this.apiProvider.getRequest2(this.m + "all").subscribe(function (data) {
            console.log(data);
            _this.notes = JSON.parse(data["_body"]);
        }, function (err) {
            console.log(err);
        });
    };
    NotePage.prototype.ionViewWillEnter = function () {
        this.getNotes();
    };
    NotePage.prototype.getItems = function (ev) {
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.notes = this.notes.filter(function (item) {
                return (item.nif.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.getNotes();
        }
    };
    NotePage.prototype.presentTost = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            cssClass: 'dark-trans',
            closeButtonText: 'OK',
            showCloseButton: true
        });
        toast.present();
    };
    NotePage.prototype.deleteObject = function (obj) {
        var _this = this;
        this.apiProvider.deleteRequestById(this.m, obj.ID).subscribe(function (data) {
            console.log(data);
            _this.presentTost('Suppression d\'une note effctuées');
            _this.removeLigne(obj);
        }, function (err) {
            console.log(err);
        });
    };
    NotePage.prototype.removeLigne = function (obj) {
        var index = this.notes.indexOf(obj);
        if (index > -1) {
            this.notes.splice(index, 1);
        }
    };
    NotePage.prototype.supprConfirm = function (obj) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Supprimer',
            message: 'Voulez vous vraiment supprimer cette note ?',
            buttons: [
                {
                    text: 'Non',
                    handler: function () {
                        console.log('Desagree clicked');
                    }
                },
                {
                    text: 'Oui',
                    handler: function () {
                        _this.deleteObject(obj);
                    }
                }
            ]
        });
        confirm.present();
    };
    NotePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getNotes();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    NotePage.prototype.ajouter = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__choix_matiere_choix_matiere__["a" /* ChoixMatierePage */]);
    };
    NotePage.prototype.modifier = function (obj) {
        console.log(obj);
        //this.navCtrl.push(UpdateNotesPage, { "obj": obj });
    };
    NotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-note',template:/*ion-inline-start:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\note\note.html"*/'<ion-header>\n  <ion-navbar no-border-bottom color="otr">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Notes\n    </ion-title>\n  </ion-navbar>\n  <!-- <ion-searchbar (ionInput)="getItems($event)" placeholder="Recherche par heure"></ion-searchbar> -->\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <ion-item *ngFor="let obj of notes">\n      <!-- <ion-icon name="person"></ion-icon>  {{ obj.DATEABSENCE }} {{ obj.HEUREPERIODE }} - absent\n      <button  (click)="modifier(obj)" color="otr" ion-button outline item-end icon-start>\n        <ion-icon name="create"></ion-icon>\n      </button> \n      <button (click)="supprConfirm(obj)" color="danger" ion-button outline item-end icon-start>\n        <ion-icon name="trash"></ion-icon>\n      </button> -->\n      <ion-icon name="person" slot="start"></ion-icon>\n      {{obj.nom}} {{obj.prenoms}}\n      <div class="item-note" slot="end">\n         {{ obj.VALEURNOTESNOTES }} en {{ obj.matiere }} <br>\n         le {{ obj.DATENOTES}} \n      </div>\n      <button *ngIf="global.accessLevel==\'Administrateur\' || global.accessLevel==\'Professeur\'" (click)="supprConfirm(obj)" color="danger" ion-button outline item-end icon-start>\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-item>\n\n  </ion-list>\n\n  <div *ngIf="notes.length ==0" class="notrouve">\n    aucune notes!\n  </div>\n\n  <ion-fab *ngIf="global.accessLevel==\'Administrateur\' || global.accessLevel==\'Professeur\'" right bottom (tap)="ajouter()">\n    <button ion-fab color="otr">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\note\note.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], NotePage);
    return NotePage;
}());

//# sourceMappingURL=note.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoixMatierePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_note_add_note__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__choix_classe_choix_classe__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__choix_eleve_choix_eleve__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ChoixMatierePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChoixMatierePage = /** @class */ (function () {
    function ChoixMatierePage(apiProvider, storage, navCtrl, navParams) {
        this.apiProvider = apiProvider;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.matieres = [];
        this.choixValue = null;
        this.m = "matieres/all";
        //affectImpot: any;
        this.matiere = { ID: null };
        this.Page1 = __WEBPACK_IMPORTED_MODULE_6__choix_eleve_choix_eleve__["a" /* ChoixElevePage */];
        this.Page = __WEBPACK_IMPORTED_MODULE_4__add_note_add_note__["a" /* AddNotePage */];
    }
    ChoixMatierePage.prototype.ionViewWillEnter = function () {
        this.getMatiere();
    };
    ChoixMatierePage.prototype.choix = function (obj) {
        console.log(obj);
        this.choixValue = obj;
        this.matiere = obj;
        // alert(this.relationship);
    };
    ChoixMatierePage.prototype.continue = function () {
        this.storage.set("choixMatiere", this.matiere);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__choix_classe_choix_classe__["a" /* ChoixClassePage */], { "page1": this.Page1, "page": this.Page });
        //this.view.dismiss();
    };
    ChoixMatierePage.prototype.getMatiere = function () {
        var _this = this;
        // let p = "?profil=Matiere";
        this.apiProvider.getRequest2(this.m).subscribe(function (data) {
            console.log(data);
            var datas = JSON.parse(data["_body"]);
            if (datas.results !== null)
                _this.matieres = datas.results;
        }, function (err) {
            console.log(err);
        });
    };
    ChoixMatierePage.prototype.getItems = function (ev) {
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.matieres = this.matieres.filter(function (item) {
                return (item.LIBELLEMATIERE.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.getMatiere();
        }
    };
    ChoixMatierePage.prototype.closeModal = function () {
        //this.view.dismiss();
        this.navCtrl.pop();
    };
    ChoixMatierePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChoisirMatierePage');
    };
    ChoixMatierePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-choix-matiere',template:/*ion-inline-start:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\choix-matiere\choix-matiere.html"*/'<!--\n  Generated template for the ChoixElevePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Choisir une matière</ion-title>\n    <!-- <ion-buttons end>\n      <button ion-button (click)="closeModal()">x</button>\n    </ion-buttons> -->\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n\n    <ion-card-header>\n      Matière\n    </ion-card-header>\n\n    <ion-card-content>\n      {{ matiere?.LIBELLEMATIERE }}\n    </ion-card-content>\n\n  </ion-card>\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="Recherche par Nom"></ion-searchbar>\n\n  <ion-list radio-group [(ngModel)]="relationship">\n    <ion-list-header>\n      Choisissez la matiere\n    </ion-list-header>\n\n    <ion-item *ngFor="let obj of matieres" (tap)="choix(obj)">\n      <ion-label> {{ obj?.LIBELLEMATIERE }}</ion-label>\n    \n      <ion-radio [checked]="obj==choixValue" value="{{obj.ID}}" ></ion-radio>\n     \n    </ion-item>\n\n  </ion-list>\n  <div *ngIf="matieres.length ==0" class="notrouve">\n    aucune matière!\n  </div>\n\n  <ion-fab right bottom>\n    <button [disabled]="choixValue==null" (tap)="continue()" ion-fab color="otr">\n      <ion-icon name="arrow-forward"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\choix-matiere\choix-matiere.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ChoixMatierePage);
    return ChoixMatierePage;
}());

//# sourceMappingURL=choix-matiere.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choix_classe_choix_classe__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__choix_eleve_choix_eleve__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_retard_add_retard__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_api__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the RetardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RetardPage = /** @class */ (function () {
    //host="http://localhost/gepi-mobile-api/api/web/v1/";
    function RetardPage(alertCtrl, apiProvider, navCtrl, navParams, global, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.apiProvider = apiProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.global = global;
        this.toastCtrl = toastCtrl;
        this.retards = [];
        this.m = "retards/";
    }
    RetardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RetardPage');
    };
    RetardPage.prototype.getRetards = function () {
        var _this = this;
        this.apiProvider.getRequest2(this.m + "all").subscribe(function (data) {
            console.log(data);
            _this.retards = JSON.parse(data["_body"]);
        }, function (err) {
            console.log(err);
        });
    };
    RetardPage.prototype.ionViewWillEnter = function () {
        this.getRetards();
    };
    RetardPage.prototype.getItems = function (ev) {
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.retards = this.retards.filter(function (item) {
                return (item.nif.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.getRetards();
        }
    };
    RetardPage.prototype.presentTost = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            cssClass: 'dark-trans',
            closeButtonText: 'OK',
            showCloseButton: true
        });
        toast.present();
    };
    RetardPage.prototype.deleteObject = function (obj) {
        var _this = this;
        this.apiProvider.deleteRequestById(this.m, obj.ID).subscribe(function (data) {
            console.log(data);
            _this.presentTost('Suppression d\'une Absence effctuées');
            _this.removeLigne(obj);
        }, function (err) {
            console.log(err);
        });
    };
    RetardPage.prototype.removeLigne = function (obj) {
        var index = this.retards.indexOf(obj);
        if (index > -1) {
            this.retards.splice(index, 1);
        }
    };
    RetardPage.prototype.supprConfirm = function (obj) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Supprimer',
            message: 'Voulez vous vraiment supprimer cet absence?',
            buttons: [
                {
                    text: 'Non',
                    handler: function () {
                        console.log('Desagree clicked');
                    }
                },
                {
                    text: 'Oui',
                    handler: function () {
                        _this.deleteObject(obj);
                    }
                }
            ]
        });
        confirm.present();
    };
    RetardPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getRetards();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    RetardPage.prototype.ajouter = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__choix_classe_choix_classe__["a" /* ChoixClassePage */], { "page1": __WEBPACK_IMPORTED_MODULE_3__choix_eleve_choix_eleve__["a" /* ChoixElevePage */], "page": __WEBPACK_IMPORTED_MODULE_4__add_retard_add_retard__["a" /* AddRetardPage */] });
    };
    RetardPage.prototype.modifier = function (obj) {
        console.log(obj);
        //this.navCtrl.push(UpdateRetardsPage, { "obj": obj });
    };
    RetardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-retard',template:/*ion-inline-start:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\retard\retard.html"*/'<ion-header>\n  <ion-navbar no-border-bottom color="otr">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Retards\n    </ion-title>\n  </ion-navbar>\n  <!-- <ion-searchbar (ionInput)="getItems($event)" placeholder="Recherche par heure"></ion-searchbar> -->\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <ion-item *ngFor="let obj of retards">\n      <!-- <ion-icon name="person"></ion-icon>  {{ obj.DATEABSENCE }} {{ obj.HEUREPERIODE }} - absent\n      <button  (click)="modifier(obj)" color="otr" ion-button outline item-end icon-start>\n        <ion-icon name="create"></ion-icon>\n      </button> \n      <button (click)="supprConfirm(obj)" color="danger" ion-button outline item-end icon-start>\n        <ion-icon name="trash"></ion-icon>\n      </button> -->\n      <ion-icon name="person" slot="start"></ion-icon>\n      {{obj.nom}} {{obj.prenoms}}\n      <div class="item-note" slot="end">\n        en retard le {{ obj.DATERETARD}} <br>\n        à la {{ obj.HEUREPERIODE }} <br>\n        heure d\'arrivée: {{obj.HEUREARRIVE}}\n      </div>\n      <button *ngIf="global.accessLevel==\'Administrateur\' || global.accessLevel==\'Professeur\'" (click)="supprConfirm(obj)" color="danger" ion-button outline item-end icon-start>\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-item>\n\n  </ion-list>\n\n  <div *ngIf="retards.length ==0" class="notrouve">\n    aucun retard!\n  </div>\n\n  <ion-fab *ngIf="global.accessLevel==\'Administrateur\' || global.accessLevel==\'Professeur\'" right bottom (tap)="ajouter()">\n    <button ion-fab color="otr">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\retard\retard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], RetardPage);
    return RetardPage;
}());

//# sourceMappingURL=retard.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRetardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AddRetardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddRetardPage = /** @class */ (function () {
    function AddRetardPage(alertCtrl, global, loadingCtrl, toastCtrl, apiProvider, formBuilder, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.global = global;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.apiProvider = apiProvider;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.m = 'retards/add';
        this.mperiode = 'periodes/';
        this.eleve = {};
        this.retard = {
            ID: '',
            IDELEVE: undefined,
            IDPERIODE: '',
            HEUREARRIVE: '',
            DATERETARD: '',
        };
        this.eleve = this.navParams.get("eleve");
        this.retard.IDELEVE = this.eleve.id;
        var validators = {
            "name": [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern("[A-Za-z\s]{2,50}")],
            "dob": [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        };
        this.formAddRetard = this.formBuilder.group({
            //  classe: ['',validators.name],
            time: ['', validators.dob],
            periode: ['', validators.dob],
            date: ['', validators.dob],
        });
    }
    AddRetardPage.prototype.ionViewDidLoad = function () {
        this.getPeriodes();
        console.log('ionViewDidLoad AddRetardPage');
    };
    AddRetardPage.prototype.presentTost = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            cssClass: 'dark-trans',
            closeButtonText: 'OK',
            showCloseButton: true
        });
        toast.present();
    };
    AddRetardPage.prototype.save = function () {
        var _this = this;
        if (this.formAddRetard.valid) {
            var loader_1 = this.loadingCtrl.create({
                content: "Ajout du retard...",
                spinner: "bubbles"
            });
            loader_1.present();
            var postData = void 0;
            postData = this.retard;
            console.info('DEPART');
            console.log(postData);
            this.apiProvider.saveRequest(JSON.stringify(postData), this.m).subscribe(function (data) {
                loader_1.dismiss();
                console.info('RETOUR');
                console.log(data["_body"]);
                var response = JSON.parse(data["_body"]);
                if (response.status == "ok") {
                    _this.presentTost(response.message);
                    _this.navCtrl.pop();
                }
                else {
                    loader_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: 'Un problème est survenu!',
                        duration: 3000,
                        position: 'bottom',
                        cssClass: 'dark-trans',
                        closeButtonText: 'OK',
                        showCloseButton: true
                    });
                    toast.present();
                }
            }, function (err) {
                console.info('ERREUR');
                //console.log(err);
                console.log(err["_body"]);
                loader_1.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Resolve Connectivity Issue!',
                    duration: 3000,
                    position: 'bottom',
                    cssClass: 'dark-trans',
                    closeButtonText: 'OK',
                    showCloseButton: true
                });
                toast.present();
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Tous les champs ne sont pas rempli!',
                duration: 3000,
                position: 'bottom',
                cssClass: 'dark-trans',
                closeButtonText: 'OK',
                showCloseButton: true
            });
            toast.present();
        }
    };
    AddRetardPage.prototype.getPeriodes = function () {
        var _this = this;
        this.apiProvider.getRequest2(this.mperiode + "all").subscribe(function (data) {
            console.log(data);
            _this.periodes = JSON.parse(data["_body"]);
        }, function (err) {
            console.log(err);
        });
    };
    AddRetardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-retard',template:/*ion-inline-start:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\add-retard\add-retard.html"*/'<!--\n  Generated template for the AddContribuablePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="otr">\n    <ion-title>Enrégistrer le retard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="save()" [formGroup]="formAddRetard">\n    <ion-list padding>\n      <ion-card>\n\n        <ion-card-header>\n          Eleve\n        </ion-card-header>\n\n        <ion-card-content>\n          {{ eleve.nom }} {{ eleve.prenoms }}: {{ eleve.classe }}\n        </ion-card-content>\n\n      </ion-card>\n     \n      <ion-item>\n        <ion-label floating>Heure</ion-label>\n        <ion-select  formControlName="periode" [(ngModel)]="retard.IDPERIODE">\n          <ion-option *ngFor="let obj2 of periodes" [value]="obj2.ID">{{obj2.HEUREPERIODE}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Heure retard</ion-label>\n        <ion-input formControlName="time" [(ngModel)]="retard.HEUREARRIVE" type="time"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Date retard</ion-label>\n        <ion-input formControlName="date" [(ngModel)]="retard.DATERETARD" type="date"></ion-input>\n      </ion-item>\n\n    </ion-list>\n    <div padding>\n      <button type="submit" ion-button color="otr" block>Enregistrer</button>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\add-retard\add-retard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddRetardPage);
    return AddRetardPage;
}());

//# sourceMappingURL=add-retard.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewEmploidutempsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ViewEmploidutempsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewEmploidutempsPage = /** @class */ (function () {
    function ViewEmploidutempsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ViewEmploidutempsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewEmploidutempsPage');
    };
    ViewEmploidutempsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-emploidutemps',template:/*ion-inline-start:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\view-emploidutemps\view-emploidutemps.html"*/'<!--\n  Generated template for the ViewEmploidutempsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>view-emploidutemps</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\view-emploidutemps\view-emploidutemps.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ViewEmploidutempsPage);
    return ViewEmploidutempsPage;
}());

//# sourceMappingURL=view-emploidutemps.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, loadingCtrl, formBuilder, global, alertCtrl, http, toastCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.credentials = {
            phoneno: '',
            password: ''
        };
        this.loginForm = this.formBuilder.group({
            phoneno: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    }
    LoginPage.prototype.loginFxn = function () {
        var _this = this;
        if (this.loginForm.valid) {
            var loader = this.loadingCtrl.create({
                content: "Authenticating...",
                spinner: "bubbles"
            });
            loader.present();
            this.http.post("http://localhost/gepi-mobile-api/api2/login.php", JSON.stringify(this.credentials))
                .subscribe(function (data) {
                console.log(data["_body"]);
                var response = JSON.parse(data["_body"]);
                if (response.response == "success") {
                    var toast = _this.toastCtrl.create({
                        message: 'Login was successfully',
                        duration: 3000,
                        position: 'bottom',
                        cssClass: 'dark-trans',
                        closeButtonText: 'OK',
                        showCloseButton: true
                    });
                    toast.present();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                    _this.storage.set("session", response);
                    _this.global.session = response;
                    _this.global.accessLevel = _this.global.session.profil;
                }
                else {
                    if (response.error == "account disabled") {
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Login',
                            subTitle: 'Account is deactivated! Contact Administrator!',
                            buttons: ['OK']
                        });
                        alert_1.present();
                    }
                    else if (response.error == 'password error') {
                        var alert_2 = _this.alertCtrl.create({
                            title: 'Login',
                            subTitle: 'Incorrect Password!',
                            buttons: ['OK']
                        });
                        alert_2.present();
                    }
                    else {
                        var alert_3 = _this.alertCtrl.create({
                            title: 'Login',
                            subTitle: 'Incorrect Phone Number!',
                            buttons: ['OK']
                        });
                        alert_3.present();
                    }
                }
            }, function (error) {
                var toast = _this.toastCtrl.create({
                    message: 'Resolve Connectivity Issue!',
                    duration: 3000,
                    position: 'bottom',
                    cssClass: 'dark-trans',
                    closeButtonText: 'OK',
                    showCloseButton: true
                });
                toast.present();
            });
            loader.dismiss();
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Properly fill in all details!',
                duration: 3000,
                position: 'bottom',
                cssClass: 'dark-trans',
                closeButtonText: 'OK',
                showCloseButton: true
            });
            toast.present();
        }
    };
    LoginPage.prototype.forget = function () {
        var alert = this.alertCtrl.create({
            title: 'Login',
            subTitle: 'Contact Adminstrator for Password Reset!',
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="otr">\n      <ion-title id=""> GEPI mobile</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n<ion-content padding id="login">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-2></ion-col>\n      <ion-col col-8 style="margin-left: auto;margin-right: auto;display: block;">\n        <img src="assets/imgs/logo2.png" style="width:100%;height:auto;">\n      </ion-col>\n      <ion-col col-2></ion-col>\n    </ion-row>\n  </ion-grid>\n  <form (ngSubmit)="loginFxn()" [formGroup]="loginForm">\n    <ion-list class="list-form" style="margin-top:30px;margin-bottom: 30px">\n      <ion-item style="padding:0px !important; border-bottom:none !important;border-top:none;font-size: 14px;margin-top:10px;background:none;border-bottom:1px solid black;box-shadow:none;">\n        <ion-input style="color:black;border-bottom-color:black;box-shadow:none;" type="text" placeholder="Phone No." [(ngModel)]="credentials.phoneno" formControlName="phoneno"></ion-input>\n      </ion-item>\n      <ion-item style="padding:0px !important; font-size: 14px;margin-top:10px;background:none;border-bottom:1px solid black;box-shadow:none;">\n        <ion-input style="color:black;border-bottom-color:black;box-shadow:none;" type="password" placeholder="Password" formControlName="password" [(ngModel)]="credentials.password"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <button style="margin-top: 15px;height: 35px;font-size: 14px;" color="black" ion-button  block  type="submit">Login</button>\n  </form>\n  <button ion-button style="background-color: transparent;color:black;border-color:white;border:1px solid white;margin-top:20px;height: 35px;font-size: 14px;"  block  (click)="forget()">Forgot Password</button>\n</ion-content>\n'/*ion-inline-end:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalProvider = /** @class */ (function () {
    function GlobalProvider() {
        this.accessLevel = null;
        console.log('Hello GlobalProvider Provider');
    }
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 132;

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiProvider = /** @class */ (function () {
    // getToken() {
    //   return new Promise(resolve => {
    //     this.storage.get('auth_key').then((val) => {
    //       console.log(val);
    //       resolve(val);
    //     });
    //   });
    // }
    function ApiProvider(//public http: HttpClient,
        http, storage) {
        this.http = http;
        this.storage = storage;
        console.log('Hello ApiProvider Provider');
    }
    ApiProvider_1 = ApiProvider;
    //static uploadDir = '';
    ApiProvider.getLink = function (m, t, p) {
        if (p === void 0) { p = null; }
        return ApiProvider_1.host + m + '?access-token=' + t + '&' + p;
    };
    ApiProvider.getUploadLink = function (m) {
        return ApiProvider_1.host + m;
    };
    ApiProvider.prototype.getRequest = function (m, t, p) {
        var _this = this;
        if (p === void 0) { p = null; }
        this.url = ApiProvider_1.getLink(m, t, p);
        console.log(this.url);
        return new Promise(function (resolve) {
            _this.http.get(_this.url).subscribe(function (data) {
                resolve(data);
                console.log(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getRequestPost = function (m, t, p) {
        var _this = this;
        this.url = ApiProvider_1.getLink(m, t, p);
        console.log(this.url);
        //let datas = "commandes="+JSON.stringify(p);
        return new Promise(function (resolve) {
            _this.http.post(_this.url, p).subscribe(function (data) {
                resolve(data);
                console.log(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    // public static getLink(m, t, p = null) {
    //   return ApiProvider.host + m + '?access-token=' + t + '&' + p;
    // }
    ApiProvider.prototype.getUrl = function (m, t, p) {
        if (t === void 0) { t = null; }
        if (p === void 0) { p = null; }
        var url = ApiProvider_1.host + m;
        if (t != null)
            url += '?access-token=' + t + '&' + p;
        if (p != null)
            url += '&' + p;
        return url;
    };
    ApiProvider.prototype.getRequest2 = function (m, t, p) {
        if (t === void 0) { t = null; }
        if (p === void 0) { p = null; }
        var url = this.getUrl(m, t, p);
        return this.http.get(url);
    };
    ApiProvider.prototype.getRequestById = function (m, id, t) {
        if (t === void 0) { t = null; }
        var url = this.getUrl(m, t) + id;
        return this.http.get(url);
    };
    ApiProvider.prototype.saveRequest = function (data, m, t) {
        if (t === void 0) { t = null; }
        var url = this.getUrl(m, t);
        // let data = JSON.stringify(data);
        return this.http.post(url, data);
    };
    ApiProvider.prototype.updateRequest = function (data, m, id, t) {
        if (t === void 0) { t = null; }
        var url = this.getUrl(m, t) + id;
        console.log(data);
        return this.http.put(url, data);
    };
    ApiProvider.prototype.deleteRequestById = function (m, id, t) {
        if (t === void 0) { t = null; }
        var url = this.getUrl(m, t) + id;
        return this.http.delete(url);
    };
    ApiProvider.host = "http://localhost/gepi-mobile-api/api/web/v1/";
    ApiProvider = ApiProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ApiProvider);
    return ApiProvider;
    var ApiProvider_1;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/abscence/abscence.module": [
		319,
		23
	],
	"../pages/add-abscence/add-abscence.module": [
		320,
		22
	],
	"../pages/add-emploidutemps/add-emploidutemps.module": [
		322,
		21
	],
	"../pages/add-note/add-note.module": [
		321,
		20
	],
	"../pages/add-notification/add-notification.module": [
		324,
		19
	],
	"../pages/add-retard/add-retard.module": [
		323,
		18
	],
	"../pages/cahier-text/cahier-text.module": [
		326,
		17
	],
	"../pages/choix-classe/choix-classe.module": [
		325,
		16
	],
	"../pages/choix-eleve/choix-eleve.module": [
		327,
		15
	],
	"../pages/choix-matiere/choix-matiere.module": [
		328,
		14
	],
	"../pages/classe/classe.module": [
		329,
		13
	],
	"../pages/eleve/eleve.module": [
		330,
		12
	],
	"../pages/emploiedutemps/emploiedutemps.module": [
		331,
		11
	],
	"../pages/home/home.module": [
		332,
		10
	],
	"../pages/login/login.module": [
		333,
		9
	],
	"../pages/matiere/matiere.module": [
		334,
		8
	],
	"../pages/note/note.module": [
		335,
		7
	],
	"../pages/notification/notification.module": [
		336,
		6
	],
	"../pages/parent/parent.module": [
		337,
		0
	],
	"../pages/periode/periode.module": [
		338,
		5
	],
	"../pages/profile/profile.module": [
		339,
		4
	],
	"../pages/retard/retard.module": [
		340,
		3
	],
	"../pages/view-emploidutemps/view-emploidutemps.module": [
		341,
		2
	],
	"../pages/view-notification/view-notification.module": [
		342,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 174;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CahierTextPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CahierTextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CahierTextPage = /** @class */ (function () {
    function CahierTextPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CahierTextPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CahierTextPage');
    };
    CahierTextPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cahier-text',template:/*ion-inline-start:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\cahier-text\cahier-text.html"*/'<!--\n  Generated template for the CahierTextPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>cahier-text</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\cahier-text\cahier-text.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CahierTextPage);
    return CahierTextPage;
}());

//# sourceMappingURL=cahier-text.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ClassePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClassePage = /** @class */ (function () {
    function ClassePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ClassePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClassePage');
    };
    ClassePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-classe',template:/*ion-inline-start:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\classe\classe.html"*/'<!--\n  Generated template for the ClassePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>classe</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\classe\classe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ClassePage);
    return ClassePage;
}());

//# sourceMappingURL=classe.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElevePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ElevePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ElevePage = /** @class */ (function () {
    function ElevePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ElevePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ElevePage');
    };
    ElevePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-eleve',template:/*ion-inline-start:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\eleve\eleve.html"*/'<!--\n  Generated template for the ElevePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>eleve</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\eleve\eleve.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ElevePage);
    return ElevePage;
}());

//# sourceMappingURL=eleve.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmploiedutempsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_emploidutemps_add_emploidutemps__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_emploidutemps_view_emploidutemps__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the EmploiedutempsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmploiedutempsPage = /** @class */ (function () {
    //mdelete:string = "api/emploidutemps/delete.php"
    function EmploiedutempsPage(toastCtrl, alertCtrl, global, navCtrl, loadingCtrl, navParams, http) {
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.global = global;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.http = http;
        this.emploidutemps = [];
        this.total = 0;
        //m:string = "api/emploidutemps/list.php";
        this.m = "emploidutemps/all";
        if (this.global.session == null) {
            this.navCtrl.pop();
        }
    }
    EmploiedutempsPage.prototype.profile = function (item, id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__view_emploidutemps_view_emploidutemps__["a" /* ViewEmploidutempsPage */], { "id": id });
        item.close();
    };
    EmploiedutempsPage.prototype.delete = function (item, id) {
        var _this = this;
        var p = '?id=' + id + "&delete";
        this.http.get(this.global.serverAddress + this.m + p)
            .subscribe(function (data) {
            var resp = JSON.parse(data["_body"]);
            if (resp.response == "success") {
                var toast = _this.toastCtrl.create({
                    message: 'Emploidutemps successfully deleted!',
                    duration: 3000,
                    position: 'bottom',
                    cssClass: 'dark-trans',
                    closeButtonText: 'OK',
                    showCloseButton: true
                });
                toast.present();
                _this.initialiseEmploidutempss();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Emploidutemps could not be deleted!',
                    duration: 3000,
                    position: 'bottom',
                    cssClass: 'dark-trans',
                    closeButtonText: 'OK',
                    showCloseButton: true
                });
                toast.present();
            }
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Resolve Connectivity Issue!',
                duration: 3000,
                position: 'bottom',
                cssClass: 'dark-trans',
                closeButtonText: 'OK',
                showCloseButton: true
            });
            toast.present();
        });
        item.close();
    };
    EmploiedutempsPage.prototype.filterEmploidutempss = function (ev) {
        var _this = this;
        this.http.get(this.global.serverAddress + this.m)
            .subscribe(function (data) {
            _this.emploidutemps = JSON.parse(data["_body"]);
            var val = ev.target.value;
            if (val && val.trim() !== '') {
                _this.emploidutemps = _this.emploidutemps.filter(function (data) {
                    return ((data.fldfirstname.toLowerCase().indexOf(val.toLowerCase()) > -1));
                });
            }
            _this.getTotal();
        }, function (error) {
            console.log("failed");
        });
    };
    EmploiedutempsPage.prototype.isNetwork = function (network, phone) {
        for (var i = 0; i < network.length; i++) {
            if (network[i].indexOf(phone.substr(0, 2)) > -1) {
                return true;
            }
        }
        return false;
    };
    EmploiedutempsPage.prototype.ionViewDidEnter = function () {
        this.initialiseEmploidutempss();
    };
    EmploiedutempsPage.prototype.initialiseEmploidutempss = function () {
        var _this = this;
        this.http.get(this.global.serverAddress + this.m)
            .subscribe(function (data) {
            console.log(data);
            //return null;
            _this.emploidutemps = JSON.parse(data["_body"]);
            console.log(_this.emploidutemps);
            _this.getTotal();
        }, function (error) {
            console.log("failed");
        });
    };
    EmploiedutempsPage.prototype.showAddEmploidutemps = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_emploidutemps_add_emploidutemps__["a" /* AddEmploidutempsPage */]);
    };
    EmploiedutempsPage.prototype.getTotal = function () {
        this.total = this.emploidutemps.length;
    };
    EmploiedutempsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-emploiedutemps',template:/*ion-inline-start:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\emploiedutemps\emploiedutemps.html"*/'<!--\n  Generated template for the EmploiedutempsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>Emploi du temps</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <ion-item *ngFor="let obj of emploidudtemps">\n     \n      <button (click)="modifier(obj)" color="otr" ion-button outline item-end icon-start>\n        <ion-icon name="create"></ion-icon>\n      </button>\n      <button (click)="supprConfirm(obj)" color="danger" ion-button outline item-end icon-start>\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-item>\n\n  </ion-list>\n\n  <div *ngIf="contribuables.length ==0" class="notrouve">\n    <ion-icon name="people" class="iconmap"></ion-icon> <br> aucun contribuable\n  </div>\n\n  <ion-fab right bottom (tap)="ajouter()">\n    <button ion-fab color="otr">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content> -->\n<!--\n  Generated template for the PupilsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="otr">\n      <ion-title>Emploi du temps</ion-title>\n    </ion-navbar>\n    <ion-toolbar>\n      <ion-searchbar showCancelButton autocomplete="on" color="danger" (ionInput)="filterPupils($event)" placeholder="Filter emploidudtemps"></ion-searchbar>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content padding>\n    <ion-list>\n      <ion-item-sliding  *ngFor="let obj of emploidutemps" #item>\n        <ion-item>\n          <!-- <ion-avatar item-left>\n            <img src="{{ global.serverAddress }}avatars/{{ obj.fldobjid }}.jpg">\n          </ion-avatar> -->\n          <!-- <h2>{{ obj.fldfirstname }} {{ obj.fldsurname }} ({{ obj.fldobjid }})</h2>-->\n          <p>({{ obj.LIBELLECLASSE }})</p> \n        </ion-item>\n        <ion-item-options>\n          <button ion-button *ngIf="global.session.profil==\'Administrator\'" color="danger" (click)="delete(item,obj.ID)">\n            <ion-icon name="close"></ion-icon>\n            Supprimer\n          </button>\n          <button ion-button color="dark" (click)="profile(item,obj.ID)">\n            <ion-icon name="contact"></ion-icon>\n            Détail\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n    <ion-fab right bottom>\n      <button ion-fab (click)="showAddEmploidutemps()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-fab>\n  </ion-content>\n  '/*ion-inline-end:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\emploiedutemps\emploiedutemps.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
    ], EmploiedutempsPage);
    return EmploiedutempsPage;
}());

//# sourceMappingURL=emploiedutemps.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatierePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MatierePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MatierePage = /** @class */ (function () {
    function MatierePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MatierePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MatierePage');
    };
    MatierePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-matiere',template:/*ion-inline-start:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\matiere\matiere.html"*/'<!--\n  Generated template for the MatierePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>matiere</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\matiere\matiere.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MatierePage);
    return MatierePage;
}());

//# sourceMappingURL=matiere.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeriodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PeriodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PeriodePage = /** @class */ (function () {
    function PeriodePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PeriodePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PeriodePage');
    };
    PeriodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-periode',template:/*ion-inline-start:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\periode\periode.html"*/'<!--\n  Generated template for the PeriodePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>periode</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\periode\periode.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PeriodePage);
    return PeriodePage;
}());

//# sourceMappingURL=periode.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { ChatPage } from '../chat/chat';
//import { ChatServiceProvider } from "../../providers/chat-service/chat-service";
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(callNumber, 
        //public chatService:ChatServiceProvider, 
        http, toastCtrl, alertCtrl, global, navCtrl, navParams) {
        this.callNumber = callNumber;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.global = global;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.account = {};
        if (this.navParams.get("accountno") == null) {
            this.account = this.global.session;
        }
        else {
            this.getProfile(this.navParams.get("accountno"));
            //this.chatService.getMsg();
        }
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.call = function (phoneno) {
        var _this = this;
        this.callNumber.callNumber(phoneno, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Profile',
                subTitle: 'Dialer Error: ' + err,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    // chat(accountno){
    //     this.http.get(this.global.serverAddress+"api/profile.php?acc="+accountno)
    //       .subscribe(data => {
    //         let temp=JSON.parse(data["_body"]);
    //         if(temp.response=="success"){
    //           this.navCtrl.push(ChatPage,{'accountno':temp.fldaccountno,'phoneno':temp.fldphoneno, 'fullname':temp.fldfirstname+' '+temp.fldsurname, 'initials': temp.fldfirstname[0]+temp.fldsurname[0],'type':temp.fldtype});
    //         }
    //       }, error => {
    //       }
    //     );
    // }
    ProfilePage.prototype.getProfile = function (accountno) {
        var _this = this;
        this.http.get(this.global.serverAddress + "api/profile.php?acc=" + accountno)
            .subscribe(function (data) {
            var response = JSON.parse(data["_body"]);
            if (response.response == "success") {
                _this.account = response;
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Profile',
                    subTitle: 'Account could not be found!',
                    buttons: ['OK']
                });
                alert_1.present();
                _this.navCtrl.pop();
            }
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: 'Resolve Connectivity Issue!',
                duration: 3000,
                position: 'bottom',
                cssClass: 'dark-trans',
                closeButtonText: 'OK',
                showCloseButton: true
            });
            toast.present();
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card text-center>\n    <img style=\'padding:5px;\' src="{{global.serverAddress}}avatars/{{ account.fldaccountno }}.jpg">\n    <ion-card-content>\n      <ion-card-title>\n        {{ account.fldfirstname }} {{ account.fldsurname }}\n      </ion-card-title>\n      <ion-card-title>\n        ({{ account.fldtype }})\n      </ion-card-title>\n      <button block icon-start ion-button outline color=\'primary\'>\n        <ion-icon name="key"></ion-icon> {{ account.fldaccountno }}\n      </button>\n      <button block icon-start ion-button outline color=\'secondary\'>\n        <ion-icon name="call"></ion-icon> {{ account.fldphoneno }}\n      </button>      \n    </ion-card-content>\n  </ion-card>\n	<ion-fab left bottom *ngIf="global.session.fldaccountno!=account.fldaccountno">\n		<button ion-fab color="secondary" (click)="chat(account.fldaccountno)">\n			<ion-icon name="chatboxes"></ion-icon>\n		</button>\n	</ion-fab>\n	<ion-fab right bottom *ngIf="global.session.fldaccountno!=account.fldaccountno">\n		<button ion-fab color="dark" (click)="call(account.fldphoneno)">\n			<ion-icon name="call"></ion-icon>\n		</button>\n	</ion-fab>\n</ion-content>\n'/*ion-inline-end:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(247);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_relative_time_relative_time__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_classe_classe__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_eleve_eleve__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_matiere_matiere__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_periode_periode__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_note_note__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_abscence_abscence__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_retard_retard__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_cahier_text_cahier_text__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_notification_notification__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_emploiedutemps_emploiedutemps__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_add_emploidutemps_add_emploidutemps__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_view_emploidutemps_view_emploidutemps__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_common_http__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_add_abscence_add_abscence__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_choix_eleve_choix_eleve__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_choix_classe_choix_classe__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_choix_matiere_choix_matiere__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_add_note_add_note__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_add_retard_add_retard__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_add_notification_add_notification__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_view_notification_view_notification__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { Camera } from '@ionic-native/camera';
// import { File } from '@ionic-native/file';
// import { FileTransfer } from '@ionic-native/file-transfer';
// import { CallNumber } from '@ionic-native/call-number';


// import { AddUserPage } from '../pages/add-user/add-user';
// import { AddPupilPage } from '../pages/add-pupil/add-pupil';
// import { ChatPage } from '../pages/chat/chat';
// import { ChatsPage } from '../pages/chats/chats';


// import { MyChildrenPage } from '../pages/my-children/my-children';
// import { PeoplePage } from '../pages/people/people';

// import { PupilProfilePage } from '../pages/pupil-profile/pupil-profile';
// import { PupilsPage } from '../pages/pupils/pupils';
// import { SettingsPage } from '../pages/settings/settings';
// import { UsersPage } from '../pages/users/users';



//import { ChatServiceProvider } from '../providers/chat-service/chat-service';






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                // AddPupilPage,
                // AddUserPage,
                // ChatPage,
                // ChatsPage,
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_classe_classe__["a" /* ClassePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_eleve_eleve__["a" /* ElevePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_matiere_matiere__["a" /* MatierePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_periode_periode__["a" /* PeriodePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_emploiedutemps_emploiedutemps__["a" /* EmploiedutempsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_add_emploidutemps_add_emploidutemps__["a" /* AddEmploidutempsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_view_emploidutemps_view_emploidutemps__["a" /* ViewEmploidutempsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_note_note__["a" /* NotePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_abscence_abscence__["a" /* AbscencePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_choix_eleve_choix_eleve__["a" /* ChoixElevePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_choix_classe_choix_classe__["a" /* ChoixClassePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_choix_matiere_choix_matiere__["a" /* ChoixMatierePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_add_abscence_add_abscence__["a" /* AddAbscencePage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_add_note_add_note__["a" /* AddNotePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_add_notification_add_notification__["a" /* AddNotificationPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_view_notification_view_notification__["a" /* ViewNotificationPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_retard_retard__["a" /* RetardPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_add_retard_add_retard__["a" /* AddRetardPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_cahier_text_cahier_text__["a" /* CahierTextPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_relative_time_relative_time__["a" /* RelativeTimePipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/abscence/abscence.module#AbscencePageModule', name: 'AbscencePage', segment: 'abscence', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-abscence/add-abscence.module#AddAbscencePageModule', name: 'AddAbscencePage', segment: 'add-abscence', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-note/add-note.module#AddNotePageModule', name: 'AddNotePage', segment: 'add-note', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-emploidutemps/add-emploidutemps.module#AddEmploidutempsPageModule', name: 'AddEmploidutempsPage', segment: 'add-emploidutemps', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-retard/add-retard.module#AddRetardPageModule', name: 'AddRetardPage', segment: 'add-retard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-notification/add-notification.module#AddNotificationPageModule', name: 'AddNotificationPage', segment: 'add-notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choix-classe/choix-classe.module#ChoixClassePageModule', name: 'ChoixClassePage', segment: 'choix-classe', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cahier-text/cahier-text.module#CahierTextPageModule', name: 'CahierTextPage', segment: 'cahier-text', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choix-eleve/choix-eleve.module#ChoixElevePageModule', name: 'ChoixElevePage', segment: 'choix-eleve', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choix-matiere/choix-matiere.module#ChoixMatierePageModule', name: 'ChoixMatierePage', segment: 'choix-matiere', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/classe/classe.module#ClassePageModule', name: 'ClassePage', segment: 'classe', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/eleve/eleve.module#ElevePageModule', name: 'ElevePage', segment: 'eleve', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/emploiedutemps/emploiedutemps.module#EmploiedutempsPageModule', name: 'EmploiedutempsPage', segment: 'emploiedutemps', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/matiere/matiere.module#MatierePageModule', name: 'MatierePage', segment: 'matiere', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/note/note.module#NotePageModule', name: 'NotePage', segment: 'note', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/parent/parent.module#ParentPageModule', name: 'ParentPage', segment: 'parent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/periode/periode.module#PeriodePageModule', name: 'PeriodePage', segment: 'periode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/retard/retard.module#RetardPageModule', name: 'RetardPage', segment: 'retard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-emploidutemps/view-emploidutemps.module#ViewEmploidutempsPageModule', name: 'ViewEmploidutempsPage', segment: 'view-emploidutemps', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-notification/view-notification.module#ViewNotificationPageModule', name: 'ViewNotificationPage', segment: 'view-notification', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_common_http__["a" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_classe_classe__["a" /* ClassePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_eleve_eleve__["a" /* ElevePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_choix_eleve_choix_eleve__["a" /* ChoixElevePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_choix_classe_choix_classe__["a" /* ChoixClassePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_choix_matiere_choix_matiere__["a" /* ChoixMatierePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_matiere_matiere__["a" /* MatierePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_periode_periode__["a" /* PeriodePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_emploiedutemps_emploiedutemps__["a" /* EmploiedutempsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_add_emploidutemps_add_emploidutemps__["a" /* AddEmploidutempsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_view_emploidutemps_view_emploidutemps__["a" /* ViewEmploidutempsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_note_note__["a" /* NotePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_abscence_abscence__["a" /* AbscencePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_add_abscence_add_abscence__["a" /* AddAbscencePage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_add_note_add_note__["a" /* AddNotePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_add_notification_add_notification__["a" /* AddNotificationPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_view_notification_view_notification__["a" /* ViewNotificationPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_retard_retard__["a" /* RetardPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_add_retard_add_retard__["a" /* AddRetardPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_cahier_text_cahier_text__["a" /* CahierTextPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* ProfilePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                // Camera,
                // File,
                // FileTransfer,
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_global_global__["a" /* GlobalProvider */],
                // CallNumber,
                // ChatServiceProvider,
                __WEBPACK_IMPORTED_MODULE_25__providers_api_api__["a" /* ApiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelativeTimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Generated class for the RelativeTimePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var RelativeTimePipe = /** @class */ (function () {
    function RelativeTimePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    RelativeTimePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var timestamp = parseInt(value);
        return __WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now___default()(new Date(timestamp), { addSuffix: true });
    };
    RelativeTimePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'relativeTime',
        })
    ], RelativeTimePipe);
    return RelativeTimePipe;
}());

//# sourceMappingURL=relative-time.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import { MyChildrenPage } from '../pages/my-children/my-children';
//import { PupilsPage } from '../pages/pupils/pupils';
//import { ProfilePage } from '../pages/profile/profile';
//import { SettingsPage } from '../pages/settings/settings';
//import { UsersPage } from '../pages/users/users';
var MyApp = /** @class */ (function () {
    function MyApp(platform, global, storage, statusBar, splashScreen) {
        this.platform = platform;
        this.global = global;
        this.storage = storage;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [];
        this.statusBar.styleDefault();
        this.splashScreen.hide();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.storage.ready().then(function () {
                _this.storage.get('serverAddress').then(function (val) {
                    _this.setServerAddress(val);
                });
                _this.storage.get('session').then(function (val) {
                    _this.setAccount(val);
                });
            });
        });
    };
    MyApp.prototype.setAccount = function (val) {
        this.global.session = val;
        if (this.global.session == null) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        }
        else {
            this.global.accessLevel = this.global.session.profil;
            this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
        }
    };
    MyApp.prototype.setServerAddress = function (val) {
        //this.global.serverAddress="http://localhost/mamak/";
        this.global.serverAddress = "http://localhost/gepi-mobile-api/api/web/v1/";
        console.log(val);
    };
    MyApp.prototype.logout = function () {
        this.storage.remove("session");
        this.global.session = null;
        this.global.accessLevel = null;
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.openPage = function (index) {
        // var pages=[PupilsPage,ProfilePage,SettingsPage];
        // this.nav.push(pages[index]);
    };
    MyApp.prototype.openUsersPage = function (type) {
        //  this.nav.push(UsersPage,{'type':type});
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\app\app.html"*/'<ion-menu [content]="content">\n    <ion-header >\n      <ion-toolbar color="otr">\n        <ion-title>GEPI mobile</ion-title>\n      </ion-toolbar>\n    </ion-header>\n  \n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          {{p.title}}\n        </button>\n        <button menuClose ion-item  (click)="logout()">\n           Déconnexion\n          </button>\n      </ion-list>\n      \n    </ion-content>\n  \n  </ion-menu>\n  \n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoixElevePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ChoixElevePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChoixElevePage = /** @class */ (function () {
    function ChoixElevePage(apiProvider, storage, navCtrl, navParams) {
        this.apiProvider = apiProvider;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eleves = [];
        this.choixValue = null;
        this.m = "users/profil";
        //affectImpot: any;
        this.eleve = { ID: null };
        this.gotoPage = this.navParams.get("page");
        this.classe = this.navParams.get("classe");
    }
    ChoixElevePage.prototype.ionViewWillEnter = function () {
        this.getEleve();
    };
    ChoixElevePage.prototype.choix = function (obj) {
        console.log(obj);
        this.choixValue = obj;
        this.eleve = obj;
        // alert(this.relationship);
    };
    ChoixElevePage.prototype.continue = function () {
        this.storage.set("choixEleve", this.eleve);
        this.navCtrl.push(this.gotoPage, { "eleve": this.choixValue });
        //this.view.dismiss();
    };
    ChoixElevePage.prototype.getEleve = function () {
        var _this = this;
        var p = "?profil=Eleve&classe=" + this.classe.ID;
        this.apiProvider.getRequest2(this.m + p).subscribe(function (data) {
            console.log(data);
            var datas = JSON.parse(data["_body"]);
            if (datas.results !== null)
                _this.eleves = datas.results;
        }, function (err) {
            console.log(err);
        });
    };
    ChoixElevePage.prototype.getItems = function (ev) {
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.eleves = this.eleves.filter(function (item) {
                return (item.nom.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.getEleve();
        }
    };
    ChoixElevePage.prototype.closeModal = function () {
        //this.view.dismiss();
        this.navCtrl.pop();
    };
    ChoixElevePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChoisirElevePage');
    };
    ChoixElevePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-choix-eleve',template:/*ion-inline-start:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\choix-eleve\choix-eleve.html"*/'<!--\n  Generated template for the ChoixElevePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Choisir un élève</ion-title>\n    <!-- <ion-buttons end>\n      <button ion-button (click)="closeModal()">x</button>\n    </ion-buttons> -->\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n\n    <ion-card-header>\n      Evève\n    </ion-card-header>\n\n    <ion-card-content>\n      {{ eleve?.nom }} {{ eleve?.prenoms }} - {{ eleve?.classe }}\n    </ion-card-content>\n\n  </ion-card>\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="Recherche par Nom"></ion-searchbar>\n\n  <ion-list radio-group [(ngModel)]="relationship">\n    <ion-list-header>\n      Choisissez l\'élève\n    </ion-list-header>\n\n    <ion-item *ngFor="let obj of eleves" (tap)="choix(obj)">\n      <ion-label> {{ obj?.nom }} {{ obj?.prenoms }} - {{ obj?.classe }}</ion-label>\n    \n      <ion-radio [checked]="obj==choixValue" value="{{obj.id}}" ></ion-radio>\n     \n    </ion-item>\n\n  </ion-list>\n  <div *ngIf="eleves.length ==0" class="notrouve">\n    aucun élève!\n  </div>\n\n  <ion-fab right bottom>\n    <button [disabled]="choixValue==null" (tap)="continue()" ion-fab color="otr">\n      <ion-icon name="arrow-forward"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\choix-eleve\choix-eleve.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ChoixElevePage);
    return ChoixElevePage;
}());

//# sourceMappingURL=choix-eleve.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoixClassePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ChoixClassePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChoixClassePage = /** @class */ (function () {
    function ChoixClassePage(apiProvider, storage, navCtrl, navParams) {
        this.apiProvider = apiProvider;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.classes = [];
        this.choixValue = null;
        this.m = "classes/all";
        //affectImpot: any;
        this.classe = { ID: null };
        this.gotoPage1 = this.navParams.get("page1");
        this.gotoPage = this.navParams.get("page");
    }
    ChoixClassePage.prototype.ionViewWillEnter = function () {
        this.getClasse();
    };
    ChoixClassePage.prototype.choix = function (obj) {
        console.log(obj);
        this.choixValue = obj;
        this.classe = obj;
        // alert(this.relationship);
    };
    ChoixClassePage.prototype.continue = function () {
        this.storage.set("choixClasse", this.classe);
        this.navCtrl.push(this.gotoPage1, { "classe": this.choixValue, "page": this.gotoPage });
        //this.view.dismiss();
    };
    ChoixClassePage.prototype.getClasse = function () {
        var _this = this;
        // let p = "?profil=Classe";
        this.apiProvider.getRequest2(this.m).subscribe(function (data) {
            console.log(data);
            var datas = JSON.parse(data["_body"]);
            if (datas.results !== null)
                _this.classes = datas.results;
        }, function (err) {
            console.log(err);
        });
    };
    ChoixClassePage.prototype.getItems = function (ev) {
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.classes = this.classes.filter(function (item) {
                return (item.LIBELLECLASSE.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.getClasse();
        }
    };
    ChoixClassePage.prototype.closeModal = function () {
        //this.view.dismiss();
        this.navCtrl.pop();
    };
    ChoixClassePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChoisirClassePage');
    };
    ChoixClassePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-choix-classe',template:/*ion-inline-start:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\choix-classe\choix-classe.html"*/'<!--\n  Generated template for the ChoixElevePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Choisir une clase</ion-title>\n    <!-- <ion-buttons end>\n      <button ion-button (click)="closeModal()">x</button>\n    </ion-buttons> -->\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n\n    <ion-card-header>\n      Classe\n    </ion-card-header>\n\n    <ion-card-content>\n      {{ classe?.LIBELLECLASSE }}\n    </ion-card-content>\n\n  </ion-card>\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="Recherche par Nom"></ion-searchbar>\n\n  <ion-list radio-group [(ngModel)]="relationship">\n    <ion-list-header>\n      Choisissez la classe\n    </ion-list-header>\n\n    <ion-item *ngFor="let obj of classes" (tap)="choix(obj)">\n      <ion-label> {{ obj?.LIBELLECLASSE }}</ion-label>\n    \n      <ion-radio [checked]="obj==choixValue" value="{{obj.ID}}" ></ion-radio>\n     \n    </ion-item>\n\n  </ion-list>\n  <div *ngIf="classes.length ==0" class="notrouve">\n    aucune classe!\n  </div>\n\n  <ion-fab right bottom>\n    <button [disabled]="choixValue==null" (tap)="continue()" ion-fab color="otr">\n      <ion-icon name="arrow-forward"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\choix-classe\choix-classe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ChoixClassePage);
    return ChoixClassePage;
}());

//# sourceMappingURL=choix-classe.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__note_note__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__abscence_abscence__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__retard_retard__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { ChatsPage } from '../chats/chats';
// import { PeoplePage } from '../people/people';





/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    // chatsPage=ChatsPage;
    // peoplePage=PeoplePage;
    function HomePage(global, navCtrl, navParams) {
        this.global = global;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.openPage = function (index) {
        var pages = [__WEBPACK_IMPORTED_MODULE_5__abscence_abscence__["a" /* AbscencePage */], __WEBPACK_IMPORTED_MODULE_6__retard_retard__["a" /* RetardPage */], __WEBPACK_IMPORTED_MODULE_4__note_note__["a" /* NotePage */], __WEBPACK_IMPORTED_MODULE_3__notification_notification__["a" /* NotificationPage */]];
        this.navCtrl.push(pages[index]);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="otr">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ global.accessLevel }} </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col col-12>\n      <ion-card (tap)="openPage(0)">\n        <ion-card-content>\n          Abscences\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col col-12>\n      <ion-card (tap)="openPage(1)">\n        <ion-card-content>\n          Retards\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col col-12>\n      <ion-card (tap)="openPage(2)">\n        <ion-card-content>\n          Notes\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col col-12 *ngIf="global.accessLevel==\'Administrateur\' || global.accessLevel==\'Parent\'">\n      <ion-card (tap)="openPage(3)">\n        <ion-card-content>\n          Notifications\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <!-- <ion-grid *ngIf="global.accessLevel==\'Administrateur\'">\n    <ion-row>\n      <ion-col col-12>\n        <ion-card (tap)="openPage(7)">\n          <ion-card-content>\n            Abscences\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12>\n        <ion-card (tap)="openPage(4)">\n          <ion-card-content>\n            Notifications\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf="global.accessLevel==\'Parent\' || global.accessLevel==\'Professeur\'">\n    <ion-row>\n      <ion-col col-12>\n        <ion-card (tap)="openPage(7)">\n          <ion-card-content>\n            Abscences\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid> -->\n\n</ion-content>'/*ion-inline-end:"D:\JOSUE\PROJETS\MOBILE\PROJETIONIC\Preschool\Preschool\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[226]);
//# sourceMappingURL=main.js.map