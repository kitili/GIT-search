import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleusersComponent } from './sampleusers/sampleusers.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
{ path :'sampleusers', component: SampleusersComponent},
{ path :'profile', component: ProfileComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
