import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoteInvitationPage } from './note-invitation';

@NgModule({
  declarations: [
    NoteInvitationPage,
  ],
  imports: [
    IonicPageModule.forChild(NoteInvitationPage),
  ],
})
export class NoteInvitationPageModule {}
