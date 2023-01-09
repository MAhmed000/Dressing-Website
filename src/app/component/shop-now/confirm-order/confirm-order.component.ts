import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {
  
  constructor(public services:AuthService,private activatedRoute:ActivatedRoute,private route:Router){}

  stichcond:boolean=false;
  unstichcond:boolean=true;

  delivery_Charges:number=500;
  

  total_Amount:number=0;
  obj:any=[]

  price:any[]=[];
  amt:number=0;

  p_id:number[]=[];
  qty:number[]=[];

  ngOnInit(): void {
    //For Price
    this.activatedRoute.queryParams.subscribe(d=>{
      this.obj=JSON.parse(d['my_object']);
    })    
    // console.log(this.obj[0].post_id)
    for (let index = 0; index < this.obj.length; index++) {
      this.total_Amount=this.total_Amount+this.obj[index].price;
    }
    this.total_Amount+=+this.delivery_Charges;
  }


  UnStichClothes(){
    this.stichcond=false;
    this.unstichcond=true;
    this.total_Amount=this.total_Amount-4000;
  }

  StichClothes(){
    this.stichcond=true;
    this.unstichcond=false;
    this.total_Amount=this.total_Amount+4000;
  }


  formValue=new FormGroup({
    measurement:new FormControl('')
  })
  

  UnStichOrder(){
    for (let index = 0; index < this.obj.length; index++) {
      var val={
        p_id:this.obj[index].post_id,
        Amount:this.obj[index].price,
        Delivery_Charges:this.delivery_Charges,
        Total_Amount:this.obj[index].price+this.delivery_Charges,
        Done:false,
        Qty:this.obj[index].Qty
      }
      this.services.AddNewStichOrder(val).subscribe({
        next:(d)=>{
          alert(d);
        },error:()=>{
          alert("Some Error Occur...!");
        }
      });
    }

  }

  StichOrder(){
    var measure=this.formValue.value.measurement;
    for(let x=0;x<this.obj.length;x++){
      var val={
        p_id:this.obj[x].post_id,
        measurement:measure,
        Amount:this.obj[x].price,
        Delivery_Charges:this.delivery_Charges,
        stiching_Amount:4000,
        Total_Amount:this.obj[x].price+this.delivery_Charges+4000,
        Qty:this.obj[x].Qty,
        Done:false
      }
      console.log(val);

      this.services.AddNewSStichOrder(val).subscribe({
        next:(data:any)=>{
          alert("Your Order Place Successfully...!");
          this.route.navigate(['shop-now'])
        },error:()=>{
          alert("Error While Order Placing...!");
        }
      })
    }
  }

}







































