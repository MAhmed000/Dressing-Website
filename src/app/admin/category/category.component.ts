import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit, faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  Add=faPlusCircle;
  Edit=faEdit;
  Delete=faTrash;

  getallcategory:any[]=[] as [];

  constructor(private services:AuthService,private route:Router) {
    if(!services.isLogeedInAdmin()){
      this.route.navigate(['admin/wp-admin'])
    }
   }

  ngOnInit(): void {
    this.getAllCategory()
  }

  getAllCategory(){
    this.services.getAllCategory().subscribe(d=>{
      this.getallcategory=d;
    });
  }

  update(item:any){

  }

  deletePost(cat_id:any){
    if(confirm("Are you sure you want to delete this..!")){
      this.services.deleteCategory(cat_id).subscribe(d=>{
        alert("Record Deleted Successfully...!");
        this.getAllCategory()
      });
    }
  }

}
