import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service:AuthService,private route:Router) { }

  ngOnInit(): void {
  }
  signupform=new FormGroup({
    username:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.email,Validators.required]),
    password:new FormControl("",[Validators.required])
  });

  get username(){
    return this.signupform.get('username');
  }

  get email(){
    return this.signupform.get('email');
  }

  get password(){
    return this.signupform.get('password');
  }

  SignUp(){
    var val={
      username:this.signupform.value.username,
      email:this.signupform.value.email,
      password:this.signupform.value.password
    }
    this.service.SignUp(val).subscribe(d=>{
      alert("Sign up successfully...!")
      this.signupform.reset();
      this.route.navigate(["login"])
    });
    console.log(this.signupform.value)
  }


}
