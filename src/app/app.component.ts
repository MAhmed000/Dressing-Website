import { Component, Directive } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  myStyle:any={
    color:"#fff",
    border:"2px solid #000",
    paddingTop:"12px",
    paddingBottom:"12px"
  }

  constructor(private route:Router){
    
  }

  
  ngOnInit(): void {
      this.route.navigate(['home'])
  }
}
