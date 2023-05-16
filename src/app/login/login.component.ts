import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginRequest } from './@request/login-request';
import { LoginEndpointService } from './login-endpoint.service';

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
  
  constructor(private _router: Router,
              private formBuilder: FormBuilder,
              private _endpoint: LoginEndpointService,
              private toastr: ToastrService) { 
      this.loginForm = this.formBuilder.group({
        username: [''],
        password: [''],
      })
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
    this._endpoint.login(this.request).pipe(takeUntil(this._unsubscribeAll)).subscribe({
      next: (response) => {
        response.userType == 'EMPLOYER' ? 
        this._router.navigate(["/dashboard"]) : 
        this.toastr.error('<span class="now-ui-icons business_badge"></span> <b>UH OH!</b> You are not an employer.', '', {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-error alert-with-icon",
        });
      },
      error: () => {
        this.toastr.error('<span class="now-ui-icons ui-1_lock-circle-open"></span> <b>OH SNAP!</b> Bad username / password.', '', {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-error alert-with-icon",
        });
      }
    })
    // this._router.navigate(["/dashboard"]);
  }

}
