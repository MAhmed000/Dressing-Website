import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-unstich',
  templateUrl: './unstich.component.html',
  styleUrls: ['./unstich.component.css']
})
export class UnstichComponent implements OnInit {

  DoneOrder=faCheckCircle;

  constructor(private service:AuthService,private route:Router) { }

  getallstichrecord:any=[];



  ngOnInit(): void {
    this.getAllRecord()
    if(!this.service.isLogeedInAdmin()){
      this.route.navigate(['admin/wp-admin'])
    }
  }

  getAllRecord(){
    this.service.getAllunStich().subscribe(d=>{
      this.getallstichrecord=d;
    })
  }

  OrderComplete(id:any){
    if(confirm("Are you sure order is completed...?")){
      this.service.DeleteunStich(id).subscribe(d=>{
        alert("Order Completed Successfully...!");
      });
    }
  }

  click(item:any){
    var val={
        id:item.id,
        Amount:item.Amount,
        Delivery_Charges:item.Delivery_Charges,
        Total_Amount:item.Total_Amount,
        Qty:item.Qty,
        Done:true
      };
    this.service.EditDoneW_S(val).subscribe((d:any={})=>{
      alert(d.Message);
      this.getAllRecord();
    })

  }
}

