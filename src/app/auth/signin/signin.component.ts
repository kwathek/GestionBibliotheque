import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  // Create Reactive Form null
  signinForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    // init Reactive Form
    this.initForm();
  }

  // Create reactive Form
  private initForm() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['',[Validators.required , Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    })
  }
  // Fonction submit Form : get email & password if valide & call signin function from authService
  onSubmit(){
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;

    this.authService.signInUser(email,password).then(
      () => {
        // navigate to books page if valide
        this.router.navigate(['/books'])
      },
      (error) => {
        // send errer message if not valide
        this.errorMessage = error
      }
    );
  }

}
