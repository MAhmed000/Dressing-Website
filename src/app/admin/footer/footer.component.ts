import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  Insta=faInstagram;
  Face=faFacebook;
  Twitter=faTwitter;
  constructor() { }

  ngOnInit(): void {
  }

}
