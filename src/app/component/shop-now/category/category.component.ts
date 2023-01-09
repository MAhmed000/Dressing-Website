import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  getallpostbycategory:any;
  constructor(public services:AuthService,public activatedroute:ActivatedRoute,private route:Router) { }
  id:any;
  ngOnInit(): void {
    this.id=this.activatedroute.snapshot.params['id'];
    this.getpostbycategory()
  }

  getpostbycategory(){
    this.services.GetPostByCategory(this.id).subscribe(d=>{
      this.getallpostbycategory=d;
    });
  }

  allrec:any=[];
  post_id:any;
  post_title:any;
  price:Number=0;
  Category:any;
  Quantity:any=1;
  QuantityArr:any={};
  NewObj:any={};
  AddToCart(item:any){
    // this.Quantity=this.val;
    // console.log("Value = "+this.Val.nativeElement.value)

    
    this.NewObj={
      post_id:item.post_id,
      post_title:item.post_title,
      price:item.price * Number(this.Quantity),
      category:item.category,
      Qty:this.Quantity
    }
    this.allrec.push(this.NewObj);
    // console.log(this.allrec)

  }
  confirmOrder(){
    var arry=[];
    for (let index = 0; index < this.allrec.length; index++) {
      arry[index] =this.allrec[index];
    //href=1
    }
    this.route.navigate([`confirm-order`],{
    queryParams:{my_object: JSON.stringify(arry)}
  });
  }

  
}
