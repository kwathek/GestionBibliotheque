import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
      // add config firebase for Web Application
      const config = {
        apiKey: "AIzaSyD3FrwAvilO6eq3J2s8ZHSKHoACuDF0x7w",
        authDomain: "http-client-demo-3cb00.firebaseapp.com",
        databaseURL: "https://http-client-demo-3cb00.firebaseio.com",
        projectId: "http-client-demo-3cb00",
        storageBucket: "http-client-demo-3cb00.appspot.com",
        messagingSenderId: "948278310981"
      }
     firebase.initializeApp(config);
  }
}
