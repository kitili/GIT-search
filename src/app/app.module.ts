import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient,HttpHeaders }from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from '../app/service/profile.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }from '@angular/forms';
import { SampleusersComponent } from './sampleusers/sampleusers.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SampleusersComponent,
    NavbarComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }