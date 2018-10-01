import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import {FIREBASE_CONFIG} from "./app.firebase.config";
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
//import {NotesPage} from "../pages/notes/notes";
import { NoteProvider } from '../services/note/note';
import { HttpClientModule } from "@angular/common/http";
import {NoteFormPage} from "../pages/note-form/note-form";
import {RegisterService} from "../services/register/register.service";

import {TabsPageModule} from "../pages/tabs/tabs.module";
import {NotesPageModule} from "../pages/notes/notes.module";
import {FriendsPageModule} from "../pages/friends/friends.module";
import {SettingPageModule} from "../pages/setting/setting.module";
import {CalendarPageModule} from "../pages/calendar/calendar.module";
import {NotesService} from "../services/tabs/notes/notes.service";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
  //  NotesPage,
    //NoteFormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,

    TabsPageModule,
    NotesPageModule,
    FriendsPageModule,
    SettingPageModule,
    CalendarPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    //NotesPage,
    //NoteFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoteProvider,
    RegisterService,
    NotesService
  ]
})
export class AppModule {}
