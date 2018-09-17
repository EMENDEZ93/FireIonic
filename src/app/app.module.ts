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
import {NotesPage} from "../pages/notes/notes";
import { NoteProvider } from '../providers/note/note';
import { HttpClientModule } from "@angular/common/http";
import {NoteFormPage} from "../pages/note-form/note-form";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    NotesPage,
    NoteFormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    NotesPage,
    NoteFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoteProvider
  ]
})
export class AppModule {}
