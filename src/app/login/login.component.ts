import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  title='log into the system';
  email: string;
  password: string;
  isLoginForm=true;
  isSignUpSuccessful=false;
  registerForm: FormGroup;
  submitted = false;
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
  }
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
}
get f() { return this.registerForm.controls; }

  signUp(){
    this.isLoginForm=false;
    this.title='sign up for the system';
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    
    this.isLoginForm? this.login():this.signUpUser();
    
    
  } 

  signUpUser(){
    this.authService.signup({ email: this.email, password: this.password, captcha:null }).subscribe(data=>{
      console.log("response from signup",data);
      this.isSignUpSuccessful=true;
    });
  }

  login(){
    this.authService.login({ email: this.email, password: this.password, captcha:null }).subscribe(data => {
      console.log('tokens',data);
      localStorage.setItem('token',data.accessToken);
      localStorage.setItem('accessToken',data.refreshToken);
      this.router.navigate(['/tokenOfferings']);
    }, error=>{
      this.router.navigate(['/login']);
    });
  }
}
