import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {

  constructor(private services:AuthService,private route:Router) { }

  ngOnInit(): void {
  }

  userForm=new FormGroup({
    username:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(8)])
  });

  get username(){
    return this.userForm.get('username')
  }
  get email(){
    return this.userForm.get('email')
  }
  get password(){
    return this.userForm.get('password')
  }

  getFormVal(){
    this.services.AddNewUser(this.userForm.value).subscribe(d=>{
      alert("New User Added Successfully....!")
      this.route.navigate(['admin/users']);
    });
  }

}
