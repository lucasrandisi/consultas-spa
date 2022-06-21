import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials: any = {}



  constructor(private authService: AuthService,private router : Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.credentials).subscribe({
      next: response => {
        console.log(response.user);
        if(response.user.rol.name == "Alumno"){
          this.router.navigate(['/materias'])
        }
        if(response.user.rol.name == "Admin"){
          this.router.navigate(['/usuarios']);
        }
        if(response.user.rol.name == "Profesor"){
          this.router.navigate(['/inscripciones'])
        }
      },
      error: error => console.log(error)
    })
  }

}