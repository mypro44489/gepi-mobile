import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
// import { Camera } from '@ionic-native/camera';
// import { File } from '@ionic-native/file';
// import { FileTransfer } from '@ionic-native/file-transfer';
// import { CallNumber } from '@ionic-native/call-number';
import { RelativeTimePipe } from '../pipes/relative-time/relative-time';

import { MyApp } from './app.component';
// import { AddUserPage } from '../pages/add-user/add-user';
// import { AddPupilPage } from '../pages/add-pupil/add-pupil';
// import { ChatPage } from '../pages/chat/chat';
// import { ChatsPage } from '../pages/chats/chats';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
// import { MyChildrenPage } from '../pages/my-children/my-children';
// import { PeoplePage } from '../pages/people/people';
 import { ClassePage } from '../pages/classe/classe';
// import { PupilProfilePage } from '../pages/pupil-profile/pupil-profile';
// import { PupilsPage } from '../pages/pupils/pupils';
// import { SettingsPage } from '../pages/settings/settings';
// import { UsersPage } from '../pages/users/users';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GlobalProvider } from '../providers/global/global';
//import { ChatServiceProvider } from '../providers/chat-service/chat-service';
import { ProfilePage } from '../pages/profile/profile';
import { ElevePage } from '../pages/eleve/eleve';
import { MatierePage } from '../pages/matiere/matiere';
import { PeriodePage } from '../pages/periode/periode';
import { NotePage } from '../pages/note/note';
import { AbscencePage } from '../pages/abscence/abscence';
import { RetardPage } from '../pages/retard/retard';
import { CahierTextPage } from '../pages/cahier-text/cahier-text';
import { NotificationPage } from '../pages/notification/notification';
import {EmploiedutempsPage } from '../pages/emploiedutemps/emploiedutemps';
import {AddEmploidutempsPage } from '../pages/add-emploidutemps/add-emploidutemps';
import {ViewEmploidutempsPage } from '../pages/view-emploidutemps/view-emploidutemps';
import { ApiProvider } from '../providers/api/api';
import { HttpClientModule } from '@angular/common/http';
import { AddAbscencePage } from '../pages/add-abscence/add-abscence';
import { ChoixElevePage } from '../pages/choix-eleve/choix-eleve';
import { ChoixClassePage } from '../pages/choix-classe/choix-classe';
import { ChoixMatierePage } from '../pages/choix-matiere/choix-matiere';
import { AddNotePage } from '../pages/add-note/add-note';
import { AddRetardPage } from '../pages/add-retard/add-retard';
import { AddNotificationPage } from '../pages/add-notification/add-notification';
import { ViewNotificationPage } from '../pages/view-notification/view-notification';
@NgModule({
  declarations: [
    MyApp,
    // AddPupilPage,
    // AddUserPage,
    // ChatPage,
    // ChatsPage,
    HomePage,
    LoginPage,
    ClassePage,
    ElevePage,
    MatierePage,
    PeriodePage,
    NotificationPage,
    EmploiedutempsPage,
    AddEmploidutempsPage,
    ViewEmploidutempsPage,
    NotePage,
    AbscencePage,
    ChoixElevePage,
    ChoixClassePage,
    ChoixMatierePage,
    AddAbscencePage,
    AddNotePage,
    AddNotificationPage,
    ViewNotificationPage,
    RetardPage,
    AddRetardPage,
    CahierTextPage,
    ProfilePage,
     RelativeTimePipe,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HomePage,
    LoginPage,
    ClassePage,
    ElevePage,
    ChoixElevePage,
    ChoixClassePage,
    ChoixMatierePage,
    MatierePage,
    PeriodePage,
    NotificationPage,
    EmploiedutempsPage,
    AddEmploidutempsPage,
    ViewEmploidutempsPage,
    NotePage,
    AbscencePage,
    AddAbscencePage,
    AddNotePage,
    AddNotificationPage,
    ViewNotificationPage,
    RetardPage,
    AddRetardPage,
    CahierTextPage,
    ProfilePage,   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // Camera,
    // File,
    // FileTransfer,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GlobalProvider,
    // CallNumber,
    // ChatServiceProvider,
    ApiProvider
  ]
})
export class AppModule { }
