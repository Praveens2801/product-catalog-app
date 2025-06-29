import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserProfileAreaComponent } from './components/user-profile-area/user-profile-area.component';


@NgModule({
  declarations: [UserProfileComponent, UserProfileAreaComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule
  ]
})
export class UserProfileModule { }
