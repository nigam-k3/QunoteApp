import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  date: any;
  loginForm: FormGroup;
  LoadedData: any = [];
  loading: boolean = false;
  resData: any = [];

  constructor(private formBuilder: FormBuilder,
    private loginService: ServiceService,
    private router: Router) {
    this.date = new Date().getFullYear();

  }

  // get f() {
  //   return this.loginForm.controls;
  // }

  ngOnInit() {
    this.login();
    localStorage.setItem('isLogin', 'false')
    this.loginService.isLoad = false;
    console.log(this.loginService.isLoad);

  }
  login() {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^([a-zA-Z0-9_.\-]+)@([a-zA-Z0-9_.\-]+)[.]([a-zA-Z]{2,5})$'),
          Validators.maxLength(255)]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(255),
          Validators.minLength(8)
        ]
      ]
    });

  }

  onSUbmit() {
    this.loading = true;
    console.log(this.loginForm.value);
    this.loginService.savelogin(this.loginForm.value).subscribe((res) => {
      console.log(res);
      this.resData = res;
      this.resData.forEach(element => {
        if (this.loginForm.value.email == element.emailAddress && this.loginForm.value.password == element.password) {
          localStorage.setItem('isLogin', 'true')
          this.loginService.isLoad = true;
          this.router.navigate(['/profile'],
            {
              queryParams: {
                id: element.id
              }
            }
          );
        }
      });
    })
    this.loading = false;
  }

}
