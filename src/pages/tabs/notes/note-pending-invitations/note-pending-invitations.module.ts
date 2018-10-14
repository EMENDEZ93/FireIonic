import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotePendingInvitationsPage } from './note-pending-invitations';

@NgModule({
  declarations: [
    NotePendingInvitationsPage,
  ],
  imports: [
    IonicPageModule.forChild(NotePendingInvitationsPage),
  ],
})
export class NotePendingInvitationsPageModule {}
