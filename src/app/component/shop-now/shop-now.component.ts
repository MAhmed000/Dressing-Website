import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-shop-now',
  templateUrl: './shop-now.component.html',
  styleUrls: ['./shop-now.component.css']
})
export class ShopNowComponent implements OnInit {
  // @ViewChild('qty') val!:ElementRef;
  @ViewChild('qty') Val!: ElementRef;
  constructor(public service:AuthService,public route:Router) { }
  getallpost:any;
  var:any;
  ngOnInit(): void {
    this.getAllPost()
  }

  pid:any=0;

  getAllPost(){
    this.service.getAllPosts().subscribe(d=>{
      this.getallpost=d;
    })
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
