import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private services:AuthService,private route:Router) { }

  ngOnInit(): void {
    if(!this.services.isLogeedInAdmin()){
      this.route.navigate(['admin/wp-admin'])
    }
  }

}
