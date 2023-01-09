import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-stich',
  templateUrl: './stich.component.html',
  styleUrls: ['./stich.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class StichComponent implements OnInit {
  @ViewChild('btn') myElement!: HTMLElement;

  constructor(private service:AuthService,private route:Router,private chage:ChangeDetectorRef) { 
    this.getAllRecord();
  }

getallstichrecord:any=[];

  ngOnInit(): void {
    if(!this.service.isLogeedInAdmin()){
      this.route.navigate(['admin/wp-admin'])
    }
  }


  getAllRecord(){
    this.service.getAllStich().subscribe(d=>{
      this.getallstichrecord=d;
      this.chage.detectChanges()
    })
  }

  OrderComplete(id:any){
    if(confirm("Are you sure order is completed...?")){
      this.service.DeleteStich(id).subscribe(d=>{
        alert("Order Completed Successfully...!");
      });
    }
  }

  
  getRecByID(){

  }

  click(item:any){
    var val={
      id:item.id,
      measurement:item.measurement,
      amount:item.amount,
      delivery_Charges:item.delivery_Charges,
      stiching_Amount:item.stiching_Amount,
      total_Amount:item.total_Amount,
      done:true
    };
    this.service.EditDone(val).subscribe(d=>{
      alert(d);
      this.getAllRecord();
    })

  }

}
