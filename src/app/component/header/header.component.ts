import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faContactBook, faHome } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faContactCard } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBillAlt } from "@fortawesome/free-regular-svg-icons";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Home=faHome;
  About=faAddressCard;
  Contact=faContactBook;
  Shop=faShoppingCart;
  ctype=faMoneyBillAlt;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  AdminLogin(){
    console.log("You Clicked it");
    this.route.navigate(['admin/wp-admin'])
  }
  

  burger(){}
}
