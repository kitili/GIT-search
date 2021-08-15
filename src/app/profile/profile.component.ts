import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any;
  repos:any;
  username:string;
  searchTerm:string;
  @Output() searchEmmiter = new EventEmitter<any>();

constructor(private profileService:ProfileService){
  this.profileService.updateProfile(this.username);
  this.profileService.getProfileInfo().subscribe(profile => {
    console.log(profile);
    this.profile = profile;
  });

  this.profileService.getProfileRepos().subscribe(repos => {
    console.log(repos);
    this.repos = repos;
  });
}
emmitUser() {
  this.searchEmmiter.emit(this.searchTerm);
  }
 
findProfile(){
  this.profileService.updateProfile(this.username);
  this.profileService.getProfileInfo().subscribe(profile => {
    console.log(profile);
    this.profile = profile;
  });

  this.profileService.getProfileRepos().subscribe(repos => {
    console.log(repos);
    this.repos = repos;
  })
}
  ngOnInit() {
    
    this.profileService.updateProfile('kitili');
    this.profileService.getProfileInfo().subscribe(profile => this.profile = profile);
    this.profileService.getProfileRepos().subscribe(repos =>  this.repos = repos);
  }

}
