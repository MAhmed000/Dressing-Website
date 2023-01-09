import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-contact-msg',
  templateUrl: './contact-msg.component.html',
  styleUrls: ['./contact-msg.component.css']
})
export class ContactMsgComponent implements OnInit {
  Delete=faTrash;
  allcontact:any=[];
  constructor(private services:AuthService,private route:Router) { }

  ngOnInit(): void {
    this.getAllContact();
    if(!this.services.isLogeedInAdmin()){
      this.route.navigate(['admin/wp-admin'])
    }
  }

  getAllContact(){
    this.services.getallcontact().subscribe(d=>{
      this.allcontact=d;
    });
  }

  deleteContact(id:any){
    if(confirm("Are you sure you want to delete this...?")){
      this.services.deleteContactMsg(id).subscribe(d=>{
        alert("Deleted Successfully..!");
        this.getAllContact();
      });
    }
  }

}
