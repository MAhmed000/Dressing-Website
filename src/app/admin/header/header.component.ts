import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { faBlog,faList12,faShoppingCart,faUserCircle, faUserFriends } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public service:AuthService,private route:Router) { }
  Blog=faBlog;
  List=faList12;
  User=faUserCircle;
  Contact=faUserFriends;
  Order=faShoppingCart;
  ngOnInit(): void {
  }
  burger(){}


  
  Logout(){
    this.service.logoutAdmin();
    this.route.navigate(['admin/wp-admin'])
  }


}
