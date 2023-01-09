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
    if(this.service.isLogeedIn()){
      this.route.navigate(['shop-now'])
    }
  }

  loginForm=new FormGroup({
    email:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(11)])
  });

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }


  Login(){
    var val={
      email:this.loginForm.value.email,
      password:this.loginForm.value.password
    }
    this.service.SignIn(val.email,val.password).subscribe({
      next:(d:any)=>{
        this.service.setToken(d[0].username);
        this.route.navigate(['shop-now']);
      },error:()=>{
        alert("Error Occur While Login");
      }
    })
  }


}
