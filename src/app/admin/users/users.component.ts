import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  getalladmins:any=[];
  Delete=faTrash;
  Add=faPlusCircle;

  constructor(private services:AuthService,private route:Router) {
    this.getAllAdminUsers();
  }
  ngOnInit(): void {
    if(!this.services.isLogeedInAdmin()){
      this.route.navigate(['admin/wp-admin'])
    }
  }

  getAllAdminUsers(){
    this.services.getAllAdminUser().subscribe(d=>{
      this.getalladmins=d;
    });
  }

  deleteUser(id:any){
    if(confirm("Are you sure you want to delete this...?")){
      this.services.deleteAdminUser(id).subscribe(d=>{
        alert("Record Deleted Successfully...!");
        this.getAllAdminUsers();
      });
    }
  }

}
