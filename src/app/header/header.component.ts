import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import * as firbase from 'firebase';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuth: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit() {
      // Check User if connected or not
      firebase.auth().onAuthStateChanged(
        (user) => {
            if(user){
                this.isAuth = true;
            }else {
                this.isAuth = false;
            }
        }
      );
  }

  onSignOut(){
      // Call signOut function From authService to disconnect user
    this.authService.signOutUser();
  }

}
