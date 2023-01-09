import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {
  Add=faPlusSquare;
  Trash=faTrash;
  Edit=faEdit;
  constructor(private services:AuthService,private route:Router,public detect:ChangeDetectorRef) { 
    if(!services.isLogeedInAdmin()){
      this.route.navigate(['admin/wp-admin'])
    }
  }

  ngOnInit(): void {
    this.getAllPost();
  }
  getallposts:any=[];
  getAllPost(){
    this.services.getAllPosts().subscribe(d=>{
      this.getallposts=d;
      this.detect.detectChanges();
    });
  }

  deletePost(id:number){
    if(confirm("Are you sure you want to delete post...!")){
      this.services.deletePost(id).subscribe(d=>{
        alert("Record Deleted Successfully...!")
        this.getAllPost();
      })
    }
  }

  update(item:any){
    console.log(item);
  }
}
