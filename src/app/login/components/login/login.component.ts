import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials: any = {}
  loggedIn: Boolean;


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.credentials).subscribe({
      next: response => {console.log(response);
                          this.loggedIn = true;},
      error: error => console.log(error)
    })
  }

}
