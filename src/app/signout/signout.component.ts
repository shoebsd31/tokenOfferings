import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent  {

  constructor(private authService: AuthService, private router: Router ) {
  }
  signout(){
    this.authService.signout().subscribe(data=>{
      localStorage.clear();
      this.router.navigate(['/login']);
    })
  }

}
