import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.css']
})
export class AddEditPostComponent implements OnInit {

  PostData:any=[];
  getCategoryData:any[]=[];
  constructor(private services:AuthService,private activatedRoute: ActivatedRoute,private router:Router) { }
  user:any={
    id:""
  }  
  GetAllData:any=[];
  
  ngOnInit(): void {
    console.log("This is our Add-Edit-Post")
    this.user.id=this.activatedRoute.snapshot.params['id'];
    this.getSinglePostByID();
    this.getAllCategory();
  }

  postForm=new FormGroup({
    post_id:new FormControl(0),
    post_title:new FormControl(''),
    price:new FormControl(0),
    quantity:new FormControl(0),
    category:new FormControl(),
    post_img:new FormControl('anonymus.png'),
    dummy_img:new FormControl('anonymus.png'),
    post_img_path:new FormControl(this.services.PhotoUrl+"anonymus.png"),
    dummy_img_path:new FormControl(this.services.PhotoUrl+"anonymus.png")
  })


  getSinglePostByID(){
    this.services.getSinglePostData(this.user.id).subscribe(d=>{
      this.GetAllData=d;
  
      this.postForm=new FormGroup({
        post_id:new FormControl(this.GetAllData[0].post_id),
        post_title:new FormControl(this.GetAllData[0].post_title),
        price:new FormControl(this.GetAllData[0].price),
        quantity:new FormControl(this.GetAllData[0].quantity),
        category:new FormControl(this.GetAllData[0].category),
        post_img:new FormControl(this.GetAllData[0].post_img),
        dummy_img:new FormControl(this.GetAllData[0].dummy_img),
        post_img_path:new FormControl(this.services.PhotoUrl+this.GetAllData[0].post_img),
        dummy_img_path:new FormControl(this.services.PhotoUrl+this.GetAllData[0].dummy_img)
      })
    })
  }


  UploadPostImage(event:any){
    var file=event.target.files[0];
    const formdata:FormData=new FormData();
    formdata.append("uploadedfile",file,file.name);

    this.services.uploadPhoto(formdata).subscribe(d=>{
      this.postForm.value.post_img=d.toString();
      this.postForm.value.post_img_path=this.services.PhotoUrl+this.postForm.value.post_img;
      // console.log(this.postForm.value.post_img);
      // console.log(this.postForm.value.post_img_path);
    })
  }

  uploadDummyImage(event:any){
    var file=event.target.files[0];
    const formdata:FormData=new FormData();
    formdata.append("uploadedfile",file,file.name);

    this.services.uploadPhoto(formdata).subscribe(d=>{
      this.postForm.value.dummy_img=d.toString();
      this.postForm.value.dummy_img_path=this.services.PhotoUrl+this.postForm.value.dummy_img;
    });
  }

  getAllCategory(){
    this.services.getAllCategory().subscribe(d=>{
      this.getCategoryData=d;
    });
  }


  getFormVal(){
    console.log(this.postForm.value.post_img)
  // Update
   
    if(this.postForm.value.post_id != 0){
      var val={
        post_id:this.postForm.value.post_id,
        post_title:this.postForm.value.post_title,
        post_img:this.postForm.value.post_img,
        price:this.postForm.value.price,
        quantity:this.postForm.value.quantity,
        category:this.postForm.value.category,
        dummy_img:this.postForm.value.dummy_img
      }
     this.services.UpdatePost(val).subscribe(d=>{
      alert("Record updated Successfully...!");
      this.router.navigate(["admin/post"]);
     })
    }
    else{
      //Add
      var va={
        post_title:this.postForm.value.post_title,
        post_img:this.postForm.value.post_img,
        price:this.postForm.value.price,
        category:this.postForm.value.category,
        quantity:this.postForm.value.quantity,
        dummy_img:this.postForm.value.dummy_img
      }

     this.services.AddNewPost(va).subscribe(d=>{
      alert("Record Added Successfully...!");
      this.router.navigate(["admin/post"]);
     })
    }
  }


}
