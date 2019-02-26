import { Component, OnInit } from '@angular/core';
import { TokenofferingService } from '../tokenoffering.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-token-offering-details',
  templateUrl: './token-offering-details.component.html',
  styleUrls: ['./token-offering-details.component.scss']
})
export class TokenOfferingDetailsComponent implements OnInit {
  private sub: any;
  id:any;
  tokenDetails:any;
  constructor(private activatedRoute: ActivatedRoute, private tokenService: TokenofferingService) {
    this.activatedRoute.queryParams.subscribe(params => {
          let id = params['id'];
      });
      
  }
  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this.tokenService.getTokenDetails(this.id).subscribe(data=>{
        this.tokenDetails=data;
      },error=>{
        console.log(error);
      })
    });
  }
}
