import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { LoginRequest } from './@request/login-request';
import { AuthenticationService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  focus;
  focus1;
  _unsubscribeAll: Subject<any> = new Subject<any>();
  loginForm: FormGroup;
  request: LoginRequest;
  
  constructor(private formBuilder: FormBuilder,
              private _service: AuthenticationService,
              private titleService: Title,) { 
      this.loginForm = this.formBuilder.group({
        username: [''],
        password: [''],
      });
      this.titleService.setTitle('Login');
   }

  ngOnInit(): void {
  }
  
  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  login() {
    this.request = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    }
    this._service.login(this.request);
    // this._router.navigate(["/dashboard"]);
  }

}
