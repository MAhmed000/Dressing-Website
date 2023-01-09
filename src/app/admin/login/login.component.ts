import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:AuthService,private route:Router) { }

  ngOnInit(): void {
    if(this.service.isLogeedInAdmin()){
      this.route.navigate(['admin/post'])
    }
  }
  loginForm=new FormGroup({
    username:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required])
  });

  get username(){
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get('password');
  }

  Login(){
    var val={
      username:this.loginForm.value.username,
      password:this.loginForm.value.password
    }
    this.service.AdminSignIn(val.username,val.password).subscribe(d=>{
      if(d!=null){
        alert("Login Successful...!")
        this.route.navigate(['/admin/post'])    
        this.service.setAdminToken(val.username);
      }
      else{
        alert("Wrong Email or Password...!")
      }
    })
    console.log(this.loginForm.value)
  }
}
