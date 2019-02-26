import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {


constructor(private activatedRoute: ActivatedRoute, private authservice:AuthService, private router: Router) {
  this.activatedRoute.queryParams.subscribe(params => {
        let key = params['key'];
        this.authservice.activate(key).subscribe(data=>{
          console.log("returned data on redirection",data);
          this.router.navigate(['/login']);
        })

    });
    
}

  ngOnInit() {
  }

}
