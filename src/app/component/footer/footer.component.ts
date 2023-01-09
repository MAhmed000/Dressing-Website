import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { faFacebook,faInstagram,faTwitter } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public services:AuthService,private route:Router) { }

  Insta=faInstagram;
  Face=faFacebook;
  Twitter=faTwitter;

  ngOnInit(): void {
    
  }

  Logout(){
    this.services.logout();
    this.route.navigate(['login'])
  }

}
