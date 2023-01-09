import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private service:AuthService) { }

  ngOnInit(): void {
  }
  contactForm=new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl("",[Validators.required,Validators.email]),
    contact:new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(11)]),
    purpose:new FormControl(""),
  });

  get name(){
    return this.contactForm.get('name');
  }

  get email(){
    return this.contactForm.get('email');
  }

  get contact(){
    return this.contactForm.get('contact');
  }
  get purpose(){
    return this.contactForm.get('purpose');
  }

  public contactSubmit(){
    // debugger;
    var val:any={
      Name:this.contactForm.value.name,
      Email:this.contactForm.value.email,
      phone_no:this.contactForm.value.contact,
      Message:this.contactForm.value.purpose
    }

    this.service.AddNewContact(val).subscribe({
      next:(value:any)=>{
        alert(value);
        this.contactForm.reset();
      },error:(err)=>{
        alert("Fail to send your message...!");
        this.contactForm.reset();
      }
    })
  }

}