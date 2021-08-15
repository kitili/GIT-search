// import { Injectable } from '@angular/core';
// import { HttpClient }from '@angular/common/http';


// @Injectable({
//   providedIn: 'root'
// })




// export class ProfileService {

//   username:string;
//   client_id = 'af93ef785cfb010769d2';
//   client_secret = 'ceaf90465ea45b00e4a578e9a5fed40f21f37110';


//   constructor(private http:HttpClient) { 
//     console.log("Service is now ready!");
//     this.username = "andrew1440";
//   }


//   getProfileInfo(){
//     return this.http.get("https://api.github.com/users/" + this.username + "?client_id="+ this.client_id + "&client_secret=" + this.client_secret)
//   }

//   getProfileRepos(){
//     return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id="+ this.client_id + "&client_secret=" + this.client_secret)
//   }
//   updateProfile(username:string){
//     this.username = username;
//   }
// }