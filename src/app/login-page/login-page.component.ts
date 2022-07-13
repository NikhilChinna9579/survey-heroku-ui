import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DefaultService } from '../Services/default.service';
import { Login } from '../Models/login.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  hide: boolean = true;
  loginForm:any;
  notAdmin:boolean=false;
  constructor(private fb: FormBuilder,private loginservice:DefaultService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm= this.fb.group({
      userName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onLogin() {
    const model:Login={};
    model.userName=this.loginForm.value.userName;
    model.password=this.loginForm.value.password;
    console.log(this.loginForm.value);
    this.loginservice.getauth(model).subscribe(res=>{
      console.log(res);
      if(res){
      this.notAdmin=false;
      this.router.navigate(['/viewfeed']);} else {
        this.notAdmin=true;
      }
    },err => {
     console.log(err);
    });
  }

}
