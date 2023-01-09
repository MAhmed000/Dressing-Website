import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.css']
})
export class AddEditCategoryComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private services:AuthService,private route:Router) { }
  id:any=0;
  getcategory:any=[];
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.getSingleRecordID();
  }

  categoryForm=new FormGroup({
    cat_id:new FormControl(),
    cat_Name:new FormControl(""),
    total_posts:new FormControl(0)
  });


  getSingleRecordID(){
        this.services.getCategoryByID(this.id).subscribe(d=>{
          this.getcategory=d;
          console.log(this.getcategory[0]);
          this.categoryForm=new FormGroup({
            cat_id:new FormControl(this.getcategory[0].cat_id),
            cat_Name:new FormControl(this.getcategory[0].Category_Name),
            total_posts:new FormControl(this.getcategory[0].Total_Posts)
          });
        })
  }


  getFormVal(){
    if(this.id>0){
      var val={
        cat_id:this.categoryForm.value.cat_id,
        Category_Name:this.categoryForm.value.cat_Name,
        Total_Posts:this.categoryForm.value.cat_posts
      }
      this.services.EditCategory(val).subscribe(d=>{
        alert("Record Updated Successfully....!");
        this.route.navigate(['admin/category'])
      });
    }else{
      var va={
        Category_Name:this.categoryForm.value.cat_Name,
        Total_Posts:this.categoryForm.value.cat_posts
      }
      this.services.addNewCategory(va).subscribe(d=>{
        alert("Record Added Successfully....!");
        this.route.navigate(['admin/category'])

      });
    }
  }

}
