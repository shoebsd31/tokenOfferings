import { Component, OnInit } from '@angular/core';
import { TokenofferingService } from '../tokenoffering.service';

@Component({
  selector: 'app-token-offerings',
  templateUrl: './token-offerings.component.html',
  styleUrls: ['./token-offerings.component.scss']
})
export class TokenOfferingsComponent implements OnInit {
  tokens:any;
  constructor(private tokenOfferingService:TokenofferingService) { }
  
  ngOnInit() {
  }

  getTokens()
  {
    this.tokenOfferingService.getTokens().subscribe(data=>{
      this.tokens=data;
    },error=>{
      console.log(error);
    })
  }

}
