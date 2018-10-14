import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoteGuestsPage } from './note-guests';

@NgModule({
  declarations: [
    NoteGuestsPage,
  ],
  imports: [
    IonicPageModule.forChild(NoteGuestsPage),
  ],
})
export class NoteGuestsPageModule {}
